# Node HA API
REST API for Home Assistant to get the state of an entity.

## Usage

### Docker Compose
```yaml
version: "3.7"
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