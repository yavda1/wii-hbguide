# Installing cIOS

This guide will help you install cIOS on your Wii, needed for many homebrew apps such as USB Loader GX and SaveGame Manager GX.

!> The installation is different for both vWii and Wii Mini. Installing the wrong type of cIOS could brick your system.

?> To install cIOS on vWii, follow [this guide](https://wiiu.skyybrew.xyz/#/vwii)

?> To install cIOS on Wii Mini, scroll further down.

### What do you need

 - [d2x cIOS installer](https://hbb1.oscwii.org/hbb/d2x-cios-installer/d2x-cios-installer.zip) if you use a Wii, [d2xl cIOS installer](https://wii.guide/assets/files/d2xl_wii_mini_cIOS_installer_v1_beta2.zip) if you have a Wii Mini. d2x installer can be downloaded from the [Open Shop Channel](/osc)
 
 - An SD card formatted FAT32, a program to extract .zip or .7z, the Homebrew Channel and a working Wii/Wii Mini

 - An internet connection is reccomended, but if you don't have it, you have to use NUS Downloader (covered in this guide).

### Installing cIOS in a normal Wii

!> Make sure the lock switch on the SD card is in the unlocked position!

1. Extract the files and put the "apps" folder on the root of your device.
2. Run d2x cIOS installer on the Homebrew Channel.
3. Press continue and put the following settings:
``` Select cIOS: d2x-v11-beta1
Select cIOS base: 38
Select cIOS slot: 248
Select cIOS revision: 65535```
4. Once done, press A twice to install. Press A again to go back and set the options like this:
``` Select cIOS: d2x-v11-beta1
Select cIOS base: 56
Select cIOS slot: 249
Select cIOS revision: 65535```
5. Once again, press A twice to install and A again to go back. Then set the following:
``` Select cIOS: d2x-v11-beta1
Select cIOS base: 57
Select cIOS slot: 250
Select cIOS revision: 65535```
6. Press A twice to install. A again to go back. For the last time, set it to this:
``` Select cIOS: d2x-v11-beta1
Select cIOS base: 58
Select cIOS slot: 251
Select cIOS revision: 65535```
7. Press A twice to install. You can now exit the program knowing you installed the amazing cIOS.

?> If for some reason, after installing one cIOS, it gives you an error when trying to install the next one, exit to the system menu, test the connection and try again.

### Wii Mini installation

?> For the Wii Mini the installation is different.

1. Run the d2xl installer.
2. Press continue and set the options to the following:
``` Select cIOS: d2xl-v1-beta2
Select cIOS base: 57
Select cIOS slot: 249```
3. Press A to install. Once done, you can exit the installer.

### Without an internet connection

1. Download and run [NUS Downloader](https://github.com/WiiDatabase/nusdownloader/releases/download/v1.9-mod/NUSD_mod.rar) in a Windows machine.
2. Select "Database", then "IOS", "IOS38" and select v4123

!> Check "Pack WAD" and uncheck "Patch IOS".

3. Repeat for IOS56 v5661, IOS57 v5918 and IOS58 v6175.
4. Once done, check for the "titles" folder in the same one as NUS Downloader. Open the folder and locate the .wad files. Place them all on the root of your SD/USB.
5. Now run the d2x cIOS installer.
6. From now on all the options you have to put are the same as if you had internet. Scroll up.

?> cIOS is now installed! Many homebrew apps will work a lot better with it.

