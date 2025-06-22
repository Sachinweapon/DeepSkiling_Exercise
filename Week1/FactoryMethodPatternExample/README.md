
Objective:

This project demonstrates the implementation of the Factory Method Design Pattern in Java through a simple Document Management System. It simulates the creation of different types of documents such as Word, PDF, and Excel, without the client knowing the exact class that is instantiated.

Working:

1. The client code (FactoryPatternTest) interacts with the DocumentFactory abstraction.
2. Factories (WordFactory, PdfFactory, ExcelFactory) implement createDocument() and return the appropriate Document object.
3. This approach allows the system to generate objects at runtime without changing the client code.