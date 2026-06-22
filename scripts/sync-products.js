#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const UMBRACO_BASE = "https://barnowl.euwest01.umbraco.io";
const UMBRACO_API = `${UMBRACO_BASE}/umbraco/delivery/api/v2`;
const API_KEY = "2ace50bd-e77b-42dc-984f-ff88d081d8f6";

async function fetchProductsFromUmbraco() {
  console.log('Fetching products from Umbraco...');

  try {
    const response = await fetch(
      `${UMBRACO_API}/content?take=100&filter=contentType:productDetails1`,
      {
        headers: {
          "Api-Key": API_KEY,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Umbraco API error: ${response.status}`);
    }

    const data = await response.json();
    return data.items || [];
  } catch (error) {
    console.error('Error fetching from Umbraco:', error.message);
    process.exit(1);
  }
}

function mapUmbracoProduct(product) {
  const slug = product.route.path
    .split('/')
    .filter(Boolean)
    .pop()
    ?.toLowerCase() || '';

  let imageUrl = product.properties.image?.[0]?.url || '';
  if (imageUrl && !imageUrl.startsWith('http')) {
    imageUrl = `${UMBRACO_BASE}${imageUrl}`;
  }

  // Parse specifications from nested structure with tabs
  let specifications = [];
  if (product.properties.specifications?.items && Array.isArray(product.properties.specifications.items)) {
    specifications = product.properties.specifications.items.map((tab) => {
      const tabTitle = tab.content?.properties?.tabTitle || 'Specifications';
      const rows = tab.content?.properties?.rows?.items || [];
      const items = rows.map((row) => ({
        label: row.content?.properties?.label || '',
        value: row.content?.properties?.value || '',
      })).filter((spec) => spec.label || spec.value);

      return {
        tabTitle,
        items,
      };
    }).filter((tab) => tab.items.length > 0);
  }

  // Parse badge data - fields are at root level: text, style, location
  const badgeData = product.properties.text ? {
    text: product.properties.text,
    style: (product.properties.style || 'light').toLowerCase(),
    displayOn: product.properties.location || [],
  } : null;

  return {
    id: product.id,
    slug,
    title: product.properties.title,
    imageUrl,
    description: product.properties.shortDescription || '',
    longDescription: product.properties.longDescription || '',
    showOnHomepage: product.properties.showOnHomepage || false,
    specifications: specifications,
    badge: badgeData,
  };
}

async function generateProductsFile(products) {
  console.log(`Found ${products.length} products`);

  if (products.length === 0) {
    console.warn('No products found in Umbraco');
    return;
  }

  const fileContent = `export const products = ${JSON.stringify(products, null, 2)};`;

  const productsPath = path.join(__dirname, '../lib/products.ts');
  fs.writeFileSync(productsPath, fileContent);

  console.log(`✓ Updated ${productsPath}`);
  console.log(`✓ Synced ${products.length} products from Umbraco`);
}

async function main() {
  try {
    const umbracoProducts = await fetchProductsFromUmbraco();
    const mappedProducts = umbracoProducts.map(mapUmbracoProduct);
    await generateProductsFile(mappedProducts);
  } catch (error) {
    console.error('Sync failed:', error);
    process.exit(1);
  }
}

main();
