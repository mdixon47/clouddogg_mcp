export default function DatabaseTypesContent() {
  return (
    <div className="prose prose-invert max-w-none light:prose-light">
      <p>
        Understanding the different types of databases and their appropriate use cases is fundamental to implementing
        secure database integrations with MCP servers. In this lesson, we'll explore the major database types, their
        strengths and weaknesses, and when to use each one.
      </p>

      <h2>Relational Databases (SQL)</h2>
      <p>
        Relational databases organize data into tables with rows and columns, using SQL (Structured Query Language) for
        data manipulation. They enforce relationships between tables through foreign keys and provide ACID (Atomicity,
        Consistency, Isolation, Durability) compliance.
      </p>

      <h3>Common SQL Databases</h3>
      <ul>
        <li>
          <strong>PostgreSQL</strong> - Open-source, highly compliant with SQL standards, excellent for complex queries
          and data integrity. Offers robust security features including row-level security and encryption.
        </li>
        <li>
          <strong>MySQL/MariaDB</strong> - Popular open-source options with good performance. MySQL offers encryption at
          rest and SSL connections, while MariaDB extends these capabilities.
        </li>
        <li>
          <strong>Microsoft SQL Server</strong> - Enterprise-grade with advanced security features like Always
          Encrypted, dynamic data masking, and row-level security.
        </li>
        <li>
          <strong>Oracle</strong> - Enterprise database with comprehensive security features including Transparent Data
          Encryption, Label Security, and Database Vault.
        </li>
      </ul>

      <h3>Security Considerations for SQL Databases</h3>
      <ul>
        <li>SQL injection vulnerabilities if queries are not properly parameterized</li>
        <li>Need for proper access control at table, view, and row levels</li>
        <li>Encryption requirements for sensitive data columns</li>
        <li>Audit logging capabilities for compliance</li>
      </ul>

      <h2>NoSQL Databases</h2>
      <p>
        NoSQL databases provide flexible schema designs and are optimized for specific data models. They typically scale
        horizontally and may sacrifice some ACID properties for performance and scalability.
      </p>

      <h3>Types of NoSQL Databases</h3>
      <ul>
        <li>
          <strong>Document Stores (MongoDB, Couchbase)</strong> - Store data in JSON-like documents. Good for
          semi-structured data and rapid development. Security features include field-level encryption and role-based
          access control.
        </li>
        <li>
          <strong>Key-Value Stores (Redis, DynamoDB)</strong> - Simple data model with keys mapped to values. Excellent
          for caching and high-throughput scenarios. Security focuses on access control and encryption in transit/at
          rest.
        </li>
        <li>
          <strong>Column-Family Stores (Cassandra, HBase)</strong> - Optimized for queries over large datasets with high
          write throughput. Security includes cell-level access controls and encryption options.
        </li>
        <li>
          <strong>Graph Databases (Neo4j, Amazon Neptune)</strong> - Specialized for relationship-heavy data. Security
          includes role-based access control and encrypted connections.
        </li>
      </ul>

      <h3>Security Considerations for NoSQL Databases</h3>
      <ul>
        <li>NoSQL injection attacks through unvalidated user input</li>
        <li>Often less mature security features compared to traditional SQL databases</li>
        <li>Distributed nature can increase attack surface</li>
        <li>Schema flexibility can make it harder to enforce data validation</li>
      </ul>

      <h2>NewSQL Databases</h2>
      <p>
        NewSQL databases aim to provide the scalability of NoSQL systems while maintaining the ACID guarantees of
        traditional relational databases.
      </p>

      <h3>Examples of NewSQL Databases</h3>
      <ul>
        <li>
          <strong>Google Spanner</strong> - Globally distributed relational database with strong consistency.
          Enterprise-grade security with encryption at rest and in transit.
        </li>
        <li>
          <strong>CockroachDB</strong> - Distributed SQL database with strong consistency. Features include column-level
          encryption and granular access controls.
        </li>
        <li>
          <strong>VoltDB</strong> - In-memory SQL database designed for high throughput. Includes role-based security
          and encryption.
        </li>
      </ul>

      <h2>Specialized Databases</h2>
      <p>
        Beyond the main categories, specialized databases serve specific use cases with unique security considerations:
      </p>

      <ul>
        <li>
          <strong>Time-Series Databases (InfluxDB, TimescaleDB)</strong> - Optimized for time-stamped data. Security
          focuses on retention policies and access controls.
        </li>
        <li>
          <strong>Search Engines (Elasticsearch)</strong> - Optimized for full-text search. Security includes
          field-level security and document-level permissions.
        </li>
        <li>
          <strong>Vector Databases (Pinecone, Milvus)</strong> - Specialized for AI embeddings and similarity search.
          Emerging security standards focus on access control.
        </li>
      </ul>

      <h2>MCP Server Database Integration Patterns</h2>
      <p>When integrating databases with MCP servers, consider these common patterns:</p>

      <h3>Direct Integration</h3>
      <p>
        MCP servers connect directly to the database using secure connection strings and credentials. This pattern
        requires careful management of connection pools and credentials.
      </p>

      <h3>API-Mediated Access</h3>
      <p>
        MCP servers access databases through an intermediary API layer that enforces additional security controls and
        abstracts direct database access.
      </p>

      <h3>Event-Driven Integration</h3>
      <p>
        Database changes trigger events that MCP servers consume, reducing direct coupling between systems and
        potentially enhancing security through isolation.
      </p>

      <h2>Choosing the Right Database for Your Use Case</h2>
      <p>When selecting a database for integration with MCP servers, consider these security-focused criteria:</p>

      <ul>
        <li>
          <strong>Compliance Requirements</strong> - Does the database support the regulatory frameworks you need to
          comply with (GDPR, HIPAA, SOC 2, etc.)?
        </li>
        <li>
          <strong>Data Sensitivity</strong> - How sensitive is your data, and what encryption capabilities does the
          database provide?
        </li>
        <li>
          <strong>Authentication Options</strong> - What authentication mechanisms are supported (LDAP, OAuth,
          certificate-based, etc.)?
        </li>
        <li>
          <strong>Access Control Granularity</strong> - How fine-grained can you make your access controls (database,
          table, row, column level)?
        </li>
        <li>
          <strong>Audit Capabilities</strong> - What audit logging features are available, and how easily can they be
          integrated with your security monitoring systems?
        </li>
        <li>
          <strong>Encryption Support</strong> - What encryption options exist for data in transit, at rest, and in use?
        </li>
      </ul>

      <h2>Practical Exercise</h2>
      <p>
        In the accompanying hands-on exercise, you'll evaluate different database types for a healthcare scenario
        involving patient data, considering both functional requirements and security constraints.
      </p>

      <div className="bg-gray-800 p-6 rounded-lg mt-8 light:bg-gray-100">
        <h3 className="text-xl font-semibold mb-4">Key Takeaways</h3>
        <ul className="space-y-2">
          <li>Different database types have distinct security profiles and capabilities</li>
          <li>The choice of database significantly impacts your security posture and compliance capabilities</li>
          <li>MCP servers can integrate with databases through various patterns, each with security implications</li>
          <li>
            Security considerations should be a primary factor in database selection, not just performance or feature
            requirements
          </li>
        </ul>
      </div>
    </div>
  )
}
