# Node HA API
[![Docker Image CI](https://github.com/amatheo/nodehaapi/actions/workflows/docker-image.yml/badge.svg)](https://github.com/amatheo/nodehaapi/actions/workflows/docker-image.yml)\
REST API for Home Assistant to easily get the state of an entity.

## Table of Contents
- [Node HA API](#node-ha-api)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
    - [Docker Compose](#docker-compose)
  - [Usage](#usage)
  - [Configuration](#configuration)
    - [Environment Variables](#environment-variables)
## Installation
### Docker Compose
```yaml
version: "3.7"
services:
  node-ha-api:
    image: amatheo/nodehaapi:latest
    container_name: node-ha-api
    restart: unless-stopped
    ports:
      - 8080:8080
    environment:
      - PORT=8080
      - API_URL=localhost
      - API_KEY=long-lived-access-token
      - ENTITY_ID=light.living_room
```
## Usage
Ask the API to get the state of the entity.
```bash
curl -X GET http://localhost:8080
```
Give the response
```json
{
  "number": 0.123
}
```
## Configuration
<!-- Environment Variables Table -->
### Environment Variables
| Name | Description | Default |
| --- | --- |---------|
| `PORT` | Port to listen on | `8080`  |
| `API_URL` | Hostname of Home Assistant | `localhost` |
| `API_KEY` | Long-Lived Access Token | `None` |
| `ENTITY_ID` | Entity ID to get the state of | `None` |
