#include <Arduino.h>
#include <WiFi.h>
#include <Firebase_ESP_Client.h>
#include "addons/TokenHelper.h"
#include "addons/RTDBHelper.h"

#define WIFI_SSID "Abcdefg"
#define WIFI_PASSWORD "12349876"
#define API_KEY "AIzaSyCXOKF8rv5iFJhogAU8VqF7Y8POW_ZBf-k"
#define USER_EMAIL "hemakrishnan@gmail.com"
#define USER_PASSWORD "Dhoni7781#"

FirebaseData fbdo;
FirebaseAuth auth;
FirebaseConfig config;
String uid;
int currentpin = 12;
float R1 = 33000.0;
float R2 = 2200.0;
void initWiFi() {
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("Connecting to WiFi ..");
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print('.');
    delay(1000);
  }
  Serial.println(WiFi.localIP());
  Serial.println();
}

void setup(){
  Serial.begin(115200);
  initWiFi();
  config.api_key = API_KEY;
  auth.user.email = USER_EMAIL;
  auth.user.password = USER_PASSWORD;
  Firebase.reconnectWiFi(true);
  fbdo.setResponseSize(4096);
  config.token_status_callback = tokenStatusCallback;
  config.max_token_generation_retry = 5;
  Firebase.begin(&config, &auth);
  Serial.println("Getting User UID");
  while ((auth.token.uid) == "") {
    Serial.print('.');
    delay(1000);
  }
  uid = auth.token.uid.c_str();
  Serial.print("User UID: ");
  Serial.print(uid);
}

void loop(){
  int adc = analogRead(currentpin);
float adc_voltage = adc * (3.3 / 4096.0);
float current_voltage = (adc_voltage * (R1+R2)/R2);
float current = (current_voltage - 2.5) / 0.100;
Serial.println(adc);
Serial.print("Current Value: ");
Serial.println(current);
delay(1000);
  if (Firebase.isTokenExpired()){
    Firebase.refreshToken(&config);
    Serial.println("Refresh token");
  }
}
