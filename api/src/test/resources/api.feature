Feature: a client can retrieve any stats and data from the API
  Scenario: client makes call to GET /api/v1/stats
    When the client calls /api/v1/stats
    Then the client receives status code at stats of 200
    And the client receives the stats
  Scenario: client makes call to GET /api/v1/bike/8179/stats
    When the client calls /api/v1/bike/8179/stats
    Then the client receives status code at stats of bike of 200
    And the client receives the stats of bike 8179
  Scenario: client makes call to GET /api/v1/bike/8179/last/30
    When the client calls /api/v1/bike/8179/last/30
    Then the client receives status code at last days of bike of 200
    And the client receives the stats from the last 30 days of bike 8179
