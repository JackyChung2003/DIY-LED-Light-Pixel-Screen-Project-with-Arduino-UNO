<div align="center">
  
![banner](https://github.com/jc2003-2003/DIY-LED-Light-Pixel-Screen-Project-with-Arduino-UNO/blob/b717bb86890d8e15c4329258d67b423ad19142bb/LED%20Light%20Pixel%20Screen%20Project%20Banner.png)
  
# DIY LED Light Pixel Screen Project with Arduino UNO

### An interactive LED pixel screen using an Arduino UNO board and a 16x16 LED matrix to display various pixel patterns, designs, and animations.

<p align="center">
  <a href="#Setup">Setup</a> •
  <a href="#code-explanation">Code Explanation</a> •
  <a href="#troubleshooting">Troubleshooting</a> •
  <a href="#future-enhancements">Future Enhancements</a> •
  <a href="#reference-video">Reference Video</a> 
</p>
</div>

## Setup
### Hardware Setup
- **Wiring Diagram**: Detailed instructions on connecting components.
- **Components List**: Visual reference of required parts.
    - 1 Arduino Uno
    - 1 WS2812 16x16 LED Pixel Display Screen
    - 1 5V Power supply (3A or higher)
    - Jumper wire

### Library Installation
This project makes use of the [FastLED](https://github.com/FastLED/FastLED) library, which should be installed on your system. Following successful installation, you can then proceed with the subsequent steps:
1. Click on the "Code" menu when viewing the source on GitHub.
2. Select "Download ZIP."
3. Extract the downloaded archive into your Arduino/libraries directory.

### Excel Tutorial for Pixel Art Animation
We will be using the Excel to draw every single frame and update every single frame manually.
#### Step 1: Preparing colour code
   ##### Note that some colours cannot be displayed accurately as the HTML colour, different brightness will lead to different colour
1. Use HTML colour codes (e.g., #FF0000 for red) and prefix them with 0x (e.g., 0xFF0000) for Arduino compatibility.
2. Put it in the colour section of the Excel sheet for further purpose
#### Step 2: Design Animation Frames
1. In the Name and Index columns, assign a unique name to each animation frame array (e.g., Cat1, Cat2, etc.)
2. Draw the desired animation frame by copying and pasting the colour codes for each pixel from the Colour column to create the animation frames.
3. Copy the Arduino code of the array from the output column, and paste it into the Arduino code correctly
#### Step 3: Integration
1. In the `loop()` function, use the `display()` function to show each animation frame. Adjust the timing to control how long each frame is displayed.

## Code Explanation

```#include <avr/pgmspace.h>
#include "FastLED.h"

// How many leds are connected?
#define NUM_LEDS 256

// Define the Data Pin
#define DATA_PIN 6

// Define the array of leds
CRGB leds[NUM_LEDS];

// Arrays storing pixel art animations in Flash memory
const long Cat1[] PROGMEM = { ... };
const long Cat2[] PROGMEM = { ... };
const long Cat3[] PROGMEM = { ... };
// ... more frames

// Function to display pixel art from Flash memory
void display(const long int *name, int time = 100) {
  FastLED.clear();
  for(int i = 0; i < NUM_LEDS; i++) {
    leds[255-i] = pgm_read_dword(&(name[i]));  // Read array from Flash
  }
  FastLED.show();
  delay(time);
}

void setup() { 
  FastLED.addLeds<NEOPIXEL, DATA_PIN>(leds, NUM_LEDS);
  FastLED.setBrightness(10);
}

void loop() { 
  // Display pixel art animations
  // ... frame by frame using the display() function
}
```
Utilize the `FastLED` library to control the LEDs in our pixel display. We define the *number of LEDs* and the *data pin.*
Eevry frame of the pixel art animations are stored in Flash memory using the **PROGMEM** keyword.
`display()` function reads and displays animations frame by frame from Flash memory.

## Logic Explanation
### Memory Management in Arduino LED Pixel Display
Regular Arduino sketch and manipulated variables are stored in the SRAM, helping the system run smoothly in real-time. On the other hand, we utilize the flash memory to hold individual pixel art animations, neatly organized within arrays. This smart separation ensures our project operates effectively while showcasing captivating visual displays.
For instance, the UNO Rev3 board boasts 2kB SRAM, 1kB EEPROM, and 32kB Flash Memory. Further information about memory allocations for different boards can be found in the [Arduino Memory Guide](https://docs.arduino.cc/learn/programming/memory-guide).

### Pixel Display Indexing and Arrangement
The indexing of the 16x16 pixel display begins at the bottom-left corner, proceeds to the right, and features a progressive arrangement. The direction alternates on every other line, creating a distinct pattern.
![index gif](https://github.com/jc2003-2003/DIY-LED-Light-Pixel-Screen-Project-with-Arduino-UNO/blob/e347efadc4374e69826a504cd54a358f6a08cd49/16x16%20LED%20light%20index%20position.gif)

## Troubleshooting
  1. **LEDs Not Lighting Up**: Ensure the **LED data pin** is correctly connected to the designated pin on the Arduino. You can verify the power supply and polarity of the LEDs.
  2. **Incorrect Animation Display**: Check the array initialization and sequence of frames in your code. Ensure that the correct arrays are being called for the desired animations.
  3. **Flickering LEDs**: Adjust the brightness level in the FastLED.setBrightness() function to prevent overloading the LEDs. Verify your power supply's stability and capacity.(In my case, I set the brightness to 10 since I didnt connect to external power supply, if the bringness is set to 100, maximum current  could be around 256 * 60 mA = 15.36 A.)

## Future Enhancements
- **Sound Reactive Display**: Integrate a microphone and sound processing to create a display that reacts to ambient sound or music, pulsating and changing colors in response to audio cues or can call as Music Reactive Mode.
- **Wireless Control**: Maybe using some Arduino board with Wifi or adding an ESP8266 module, enabling Wi-Fi control. With Wi-Fi capabilities, you can control animations, colors, and patterns remotely through a web interface or a dedicated mobile app.
- **Custom Animation Editor**: Develop a software tool that allows users to create their own pixel art animations and upload them to the display. This would enhance user engagement and creativity, and can boost up a lot of time to manually combine the code.
- **Time and Date Display**: Create animations that display the current time and date in a creative way. This feature could serve as a functional and visually appealing clock.
- **Interactive Games**: Develop simple interactive games that users can play directly on the LED display using some button. This could include games like Pong, Snake, or memory puzzles.

## Reference Video
### Adding Wi-Fi Control to the LED Pixel Display by **Brainy-Bits**
[![Arduino 16x16 WS2812B RGB Matrix Animation Picture Frame - Tutoriall](https://i.ytimg.com/vi/jkg7T7jlIzU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDeWzgFPsnMxmtePLqaNZpjS8a1Cg)](https://www.youtube.com/watch?v=jkg7T7jlIzU&t=391s)

## Pixel Patterns
Unleash your creativity by creating captivating pixel patterns and animations.

---
