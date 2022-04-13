#!/bin/bash
POSTGRES_DB_SEED_DIR="dbs"
POSTGRES_DATABASES_ARRAY=( $POSTGRES_DATABASES )

# Iterate through the databases we need to create & seed
for POSTGRES_DB in "${POSTGRES_DATABASES_ARRAY[@]}"
do
    # Define the client command used
    pgsql=( psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" )
    echo "### Creating user \`$POSTGRES_USER\`"
    echo "CREATE USER $POSTGRES_DB ;" | "${pgsql[@]}"
    echo "### Creating database \`$POSTGRES_DB\`"
    echo "CREATE DATABASE $POSTGRES_DB ;" | "${pgsql[@]}"
    echo "### Granting ALL on database \`$POSTGRES_DB\`"
    echo "GRANT ALL PRIVILEGES ON DATABASE $POSTGRES_DB TO $POSTGRES_DB ;" | "${pgsql[@]}"
    # Add the database name to the command
    pgsql+=( "$POSTGRES_DB" )
    DB_SEED_PATH="/docker-entrypoint-initdb.d/$POSTGRES_DB_SEED_DIR/$POSTGRES_DB"
    if [ -f "$DB_SEED_PATH.sql" ]; then
        echo "### Seeding database with \`$DB_SEED_PATH.sql\`"
        cat "$DB_SEED_PATH.sql" | "${pgsql[@]}" >/dev/null
        echo "### \`$POSTGRES_DB\` database seeded"
    fi
    if [ -f "$DB_SEED_PATH.sql.gz" ]; then
        echo "### Seeding database with \`$DB_SEED_PATH.sql.gz\`"
        zcat "$DB_SEED_PATH.sql.gz" | "${pgsql[@]}" >/dev/null
        echo "### \`$POSTGRES_DB\` database seeded"
    fi
done
