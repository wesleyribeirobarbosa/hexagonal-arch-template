# Hexagonal Architecture Template

This repository is a template for building a microservice using Node.Js (**Typescript**) following the recommendations proposed by the **hexagonal** architecture.

The template consists of a **REST API** for inserting a Hello World message into **MongoDB**.

The technologies used in the construction of the template were:

- **Express**: FMK used to build the Web server.
- **Mongoose**: ODM for abstraction of interaction with MongoDB.
- **Tsyringe**: Lightweight container for dependency injection.
- **Jest**: Test FMK.
- **Swagger**: API documentation tool.
- **ESLint**: Code analysis tool.
- **Prettier**: Opinionated code formatter.
- **Docker/Docker Compose**: Used to build and start both the application and MongoDb as containers.

=======================================================

Following the recommendations of the Hexagonal architecture, the project was implemented using the concept of **ports and adapters**.

<img src="/public/assets/hexagonal-architecture.png" alt="Hexagonal Architecture Model"/>

=======================================================

**Adapters**:

There are two types of adapters: 

- Interface adapters.
- Infrastructure adapters.

**Interface adapters**, also known as "Driver" adapters, are responsible to adapt the data received by the application so that it is delivered to the domain in isolation and not tied to any external technology. They are also responsible to "package" the domain responses in the expected format.

**Infrastructure adapters**, also known as "Driven" adapters, are basically implementations of application output ports, which enable communication from the center of the hexagon to the outside world.

=======================================================

**Application**:

It represents the core of the application, thus centralizing all the business logic of the system. In this layer are the **Ports** (use cases), the **Services** (use case implementations) and the **Domain** entities.

=======================================================

**Ports**:

There are two types of ports: 

- Use Cases.
- Resources.

**Use Cases** are interfaces that create contracts with the rules defined by the application domain about the use of use cases, both as input parameters and as output types.

**Resources** are interfaces that abstract the use of external technologies inside the hexagon. In this part of the structure we see Inversion of Control actually being used, because it is through this interface that the injection of external dependencies is done and the implementation of these ports is done outside the hexagon.

=======================================================

**Services**:

Here the business logic is fully present. Services are implementations of input ports (use cases), containing application flow logic.

The consumption of resources external to the hexagon is done in this layer and for this to be possible, it is necessary that this layer receives references from external dependencies (Dependency injection) so that it can use the "output" ports of the hexagon. In this project, inversion of control is done using the **Constructor pattern**.

=======================================================

**Domain**:

The domain contains the system entities and their individual behaviors. The entities were implemented following the **Rich Domain Model**.

=======================================================

**Factories**:

They are modules responsible for "fabricating" and injecting the dependencies present in the flow, leaving the controllers and services only with their desired responsibilities.

=======================================================

**Running**:

To run the application locally, the MongoDB database must be running. If so, just run the command:

- npm run dev

To run the application as a container, just run the command:

- docker-compose up

The application API will be available at <a href="http://localhost:3001">localhost:3001</a>.

Mongo Express web interface will be available at <a href="http://localhost:8081">localhost:8081</a>.

Swagger API Docs will be available at <a href="http://localhost:3001/api-docs/">localhost:3001/api-docs/</a>.

=======================================================
