const UMBRACO_API = "https://barnowl.euwest01.umbraco.io/umbraco/delivery/api/v2";
const API_KEY = "2ace50bd-e77b-42dc-984f-ff88d081d8f6";

export interface UmbracoProduct {
  id: string;
  name: string;
  contentType: string;
  properties: {
    title: string;
    shortDescription: string;
    longDescription: string;
    image: Array<{
      url: string;
      name: string;
    }>;
    showOnHomepage?: boolean;
    specifications?: string;
  };
  route: {
    path: string;
  };
}

export async function getUmbracoProducts(): Promise<UmbracoProduct[]> {
  const response = await fetch(
    `${UMBRACO_API}/content?take=100&filter=contentType:productDetails1`,
    {
      headers: {
        "Api-Key": API_KEY,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch products from Umbraco");
  }

  const data = await response.json() as { items: UmbracoProduct[] };
  return data.items;
}

export function mapUmbracoProductToLocal(product: UmbracoProduct) {
  const slug = product.route.path
    .split("/")
    .filter(Boolean)
    .pop()
    ?.toLowerCase() || "";

  return {
    id: product.id,
    slug,
    title: product.properties.title,
    imageUrl: product.properties.image[0]?.url || "",
    description: product.properties.shortDescription,
    longDescription: product.properties.longDescription,
  };
}

export interface UmbracoHome {
  id: string;
  name: string;
  contentType: string;
  properties: {
    heroTitle: string;
    heroIntro: string;
    heroImage: Array<{
      url: string;
      name: string;
    }>;
  };
}

export async function getUmbracoHome(): Promise<UmbracoHome | null> {
  const response = await fetch(
    `${UMBRACO_API}/content?take=100&filter=contentType:home`,
    {
      headers: {
        "Api-Key": API_KEY,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch home from Umbraco");
  }

  const data = await response.json() as { items: UmbracoHome[] };
  return data.items[0] || null;
}
