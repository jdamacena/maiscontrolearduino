Overview
=====

The +Arduino Control is an application that serves as interface between an Arduino and an Android device through Bluetooth.

It is possible to program the Arduino so that, through the commands received from the Android device, via Bluetooth, it can perform the most varied types of tasks.


Important concepts
=====

- **Profile:**  is the name given to each screen with controls and commands. Generally a profile is created for each project;
- **Command:** within each profile there is a tab containing several commands, each command is nothing more than an association of a word that will be inserted into the app (either by voice command or text) and another word, which will be sent to Arduino, for example, you may want to send "1" to the Arduino every time you give the "turn on" command in the application. The commands are useful to simplify and make flexible, both the Arduino code and the use of the app, since one can easily change a keyword in the app without having to change the Arduino code;
- **Control:** refers to each item that appears on the home screen of a profile (e.g. serial monitor, button for voice command, etc.), can be shown or hidden according to the need of the project.


Creating a Profile
=====

To create a profile click on the "+" button on the profile listing screen, then fill in the fields according to your project. 

The fields are as follows:

- **Author**: gets the name of the creator of the profile, that name goes into the export and many put their emails in that field;
- **Title**: is the title of the profile, the name that appears in the profile listing and that identifies the profile throughout the app;
- **Description**: may contain a brief description of the project. Write something clear and straightforward in this field;
- **Theme**: the colored squares in the profile creation dialog represent the available themes. The theme is applied on the profile screen to modify its colors. Use what you like best - try all of them.


Creating a command
=====

To create a command, press the "+" button on the "commands" tab within a profile. After that, type the command that will be given in the app and the command that the app will send to the Arduino, tap the save option and you're done! Make sure "Enable mapping" is enabled and if the command is enabled, then each time you give the specified command to the app, it will send the other command to the Arduino.


Buttons with mappable commands
=====

On the profile screen are available some buttons that are able to send only predefined commands, such as the "On/Off" button that always sends ```btn_ativado``` or ```btn_desativado```. However, these **predefined commands are mappable**, which means you can create a command that receives the fixed command sent by the button and turns it into a command that is interesting for your project.

**Example**: create a mapping that receives ```btn_ativado``` and sends ```2```, then program the Arduino up to, when receiving a ```2```, trigger certain load. Then create another mapping receiving ```btn_desativado``` and sends ```3``` and use this code to tell the Arduino to turn off the load previously triggered.


Home screen
=====

The +Arduino Control home screen shows a button for creating a profile and also shows a list of all the profiles available in the app. Touching and holding a profile also presents options for selecting multiple profiles to export, edit (when selecting only 1 profile) or delete. Also, in the side menu are the options for importing profiles and the app preferences.


Profile Screen
=====

The profile screen is the main screen of the application, it's in it that all interaction with Arduino happens, through this screen you can create, edit and delete commands, you can show or hide controls and you can connect with Arduino to use your project .

Inside this screen are the tabs **home**, where you can connect and interact with an Arduino via Bluetooth, **commands**, where you can create, edit, activate or deactivate commands according to the needs of the project (you can have as many commands as you want) - you can also enable/disable all commands via the switch at the top of the screen - and also have the **controls** tab where you can choose what controls are relevant to your project - is here where you configure what appears in the "home" tab.


Export Profile
=====

When you export a profile, all its settings are saved to your device in a file with the ```.jun``` extension, this file is in a folder with the name of the app. It is not deleted if you uninstall the application and you can share it with everybody.

<p style="text-justify: distribute; text-indent: 1.5em; border-radius: 4px; color: white; text-align: center; background: #00897b; padding: 8px;" align="center">
Tip: share the ```.jun``` file together with the Arduino program.
</p>

Once exported, the profile file can be imported into any phone that has the **+Arduino Control** installed. The imported profile works in exactly the same way as one manually created.

The export option is found both in the profile listing (the option is shown by tapping a profile and holding - here you can export multiple profiles at once) and also within a profile in the menu where you can export the profile on which you are.


Import profile
=====

The import takes the file from a profile exported by someone (the one with the extension ```.jun```) and creates a profile that is the exact copy of the exported profile. If someone uses the **+Arduino Control** in a project, they can share the profile along with their Arduino code, so others can have the same profile on their cell phones as the original project. Very useful for anyone who likes to share their Arduino projects. 

The import option is found in the side menu of the profile listing screen.
