#include <Arduino.h>
#include <WiFi.h>
#include <Firebase_ESP_Client.h>
#include "addons/TokenHelper.h"
#include "addons/RTDBHelper.h"

#define WIFI_SSID "Abcdefg"
#define WIFI_PASSWORD "12349876"
#define FIREBASE_HOST "https://p2p-zhagaram-default-rtdb.firebaseio.com/"
#define API_KEY "AIzaSyCXOKF8rv5iFJhogAU8VqF7Y8POW_ZBf-k"
#define USER_EMAIL "hemakrishnan@gmail.com"
#define USER_PASSWORD "Dhoni7781#"

FirebaseData fbdo;
FirebaseAuth auth;
FirebaseConfig config;
String uid;
int ADC_AMP = 32;
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
  config.database_url = FIREBASE_HOST;
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
  double a=getAnalogAmp();
  Serial.println(a);
  Firebase.RTDB.setFloat(&fbdo, "/CONSUMER/Live current", a);
  Serial.println("PATH: " + fbdo.dataPath());
  delay(1000);
  if (Firebase.isTokenExpired()){
    Firebase.refreshToken(&config);
    Serial.println("Refresh token");
  }
}
float getAnalogAmp()
{
  int   sampling = 250;
  double mVperAmp = 185; 
  float ACSoffset = 2470.345;
  double RawValue = 0;
  double V = 0;
  double Amps = 0;
  for(int i=0; i<sampling; i++)
    {
    RawValue += analogRead(ADC_AMP);
    delay(1);
    }
  RawValue /= sampling;
  V = (RawValue / 4096.0) * 5000; 
  Amps = ((V - ACSoffset) / mVperAmp);
  Serial.print( "Amps:");
  Serial.println( Amps );
  return Amps;
}
