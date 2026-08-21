FROM oven/bun:1.4.0-slim

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update \
  && apt-get install -y --no-install-recommends ca-certificates openssl \
  && rm -rf /var/lib/apt/lists/*

WORKDIR /workspaces

ENV TURBO_TELEMETRY_DISABLED=1
ENV TANSTACK_CLI_TELEMETRY_DISABLED=1
