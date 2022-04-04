# hexagonal.arch.template

This repository is a template for building a microservice using Node.Js (**Typescript**) following the recommendations proposed by the **hexagonal** architecture.

The template consists of a **REST API** for creating a user and registering in the MongoDB database.

The technologies used in the construction of the template were:

- **Express**: FMK used to build the Web server.
- **Mongoose**: ODM for abstraction of interaction with MongoDB.
- **Tsyringe**: Lightweight container for dependency injection (Implementation of driven adapters).
- **Jest**: Test FMK.
- **Swagger**: API documentation tool.
- **ESLint**: Code analysis tool.
- **Prettier**: Opinionated code formatter.
- **Docker/Docker Compose**: Used to build and start both the application and MongoDb as containers.

=======================================================

Following the recommendations of the Hexagonal architecture, the project was implemented using the concept of **ports and adapters**.

The project structure follows the following pattern:

**Adapters**:

Contracts/Interfaces and implementations of "external" technologies adapters.

**Application**:

It represents the concept of "Domain" of the application, thus centralizing all the business logic of the system. In this layer are both use cases and entities.

**Controllers**:

Blocks responsible for "initiating" application flows, receiving input data and directing them to appropriate use cases. Another responsibility of this block is the handling of dependency injections.

**Routes**:

Application gateways (in this case, they represent the REST API endpoints).

**Shared**:

Entities/Classes/Functions shared by the entire system.

**Config**:

Initial framework/library setup, such as server startup with Express and model creation with Mongoose.

=======================================================
