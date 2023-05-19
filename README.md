# Node HA API
REST API for Home Assistant to get the state of an entity.

## Usage

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
## Configuration
<!-- Environment Variables Table -->
### Environment Variables
| Name | Description | Default |
| --- | --- |---------|
| `PORT` | Port to listen on | `8080`  |
| `API_URL` | Hostname of Home Assistant | `localhost` |
| `API_KEY` | Long-Lived Access Token | `None` |
| `ENTITY_ID` | Entity ID to get the state of | `None` |