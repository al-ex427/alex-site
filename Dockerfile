FROM oven/bun:latest

WORKDIR /app/alex-site

COPY . .

RUN bun i

EXPOSE 3000

RUN bun run build

CMD ["bun", "run", "start"]