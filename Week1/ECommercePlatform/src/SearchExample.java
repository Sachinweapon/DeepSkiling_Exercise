import java.util.Arrays;
import java.util.Comparator;
public class SearchExample {
  static class Product {
        private int productId;
        private String productName;
        private String category;

        public Product(int productId, String productName, String category) {
            this.productId = productId;
            this.productName = productName;
            this.category = category;
        }

        public String getProductName() {
            return productName;
        }

        @Override
        public String toString() {
            return productId + " - " + productName + " (" + category + ")";
        }
    }

    // 2. Linear Search
    public static Product linearSearch(Product[] products, String name) {
        for (Product product : products) {
            if (product.getProductName().equalsIgnoreCase(name)) {
                return product;
            }
        }
        return null;
    }

    // 3. Binary Search (requires sorted array)
    public static Product binarySearch(Product[] products, String name) {
        int left = 0;
        int right = products.length - 1;

        while (left <= right) {
            int mid = (left + right) / 2;
            String midName = products[mid].getProductName();

            int compare = midName.compareToIgnoreCase(name);
            if (compare == 0) {
                return products[mid];
            } else if (compare < 0) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return null;
    }

    // 4. Sort products by name
    public static void sortByName(Product[] products) {
        Arrays.sort(products, Comparator.comparing(Product::getProductName, String.CASE_INSENSITIVE_ORDER));
    }

    // 5. Main method
    public static void main(String[] args) {
        Product[] products = {
            new Product(11, "Laptop", "Electronics"),
            new Product(12, "Shoes", "Fashion"),
            new Product(13, "Camera", "Electronics"),
            new Product(14, "Watch", "Accessories"),
            new Product(15, "Phone", "Electronics")
        };

        
        System.out.println("Linear Search: Searching for 'Camera'");
        Product result1 = linearSearch(products, "Camera");
        System.out.println(result1 != null ? "Found: " + result1 : "Not found");

        
        sortByName(products);
        System.out.println("\nProducts sorted by name:");
        for (Product p : products) {
            System.out.println(p);
        }

      
        System.out.println("\nBinary Search: Searching for 'Camera'");
        Product result2 = binarySearch(products, "Camera");
        System.out.println(result2 != null ? "Found: " + result2 : "Not found");
    }

}
