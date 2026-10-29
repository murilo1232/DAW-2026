import { ProductService } from "../services/product-services";

export function useProducts() {
    return ProductService.listAll();
}