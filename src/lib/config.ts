import Medusa from "@medusajs/medusa-js"
import { QueryClient } from "@tanstack/react-query"
import { SALE_CHANNEL_IDS } from "./constants"

// Defaults to standard port for Medusa server
let MEDUSA_BACKEND_URL = "https://api.uat.matkinh53.com"

if (process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL) {
  MEDUSA_BACKEND_URL = process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 60 * 24,
      retry: 1,
    },
  },
})

const customMedusaClient = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })

const medusaClient = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 });

medusaClient.products.list = (query, customHeaders) => customMedusaClient.products.list({ ...query, sales_channel_id: SALE_CHANNEL_IDS }, customHeaders)

export { MEDUSA_BACKEND_URL, queryClient, medusaClient }
