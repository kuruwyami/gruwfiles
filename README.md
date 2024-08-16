<p align="center">Welcome!                                                                              [![Hits](https://hits.sh/github.com/kuruwyami/kurufiles.svg?style=flat-square&label=Thanks!&color=262626&labelColor=ffffff)](https://hits.sh/github.com/kuruwyami/kurufiles/)
  

1:Required packages 

An aur helper for installation, paru,yay...

Note:Everything is literally optional lol.

```kitty``` (terminal,see 6)

```hyprland``` (Wm)

```dolphin``` (File manager,optional too.see 5.)

```fastfetch```(fast neofetch alternative,optional but you have to change .zshrc to stop auto-starting Fastfetch.)

```wofi```(Like rofi or dmenu,a menu to launch apps)

```waybar```(bar)

```ttf-font-awesome``` (For waybar icons,if you are using Arch you can install it from aur via paru or yay,others,well not sure you have to search it,sorry)

```zsh```(shell,optional as well,you can use Fish if you want to,as an example)

```starship```(Prompt,optional,remove command that starts Starship in .zshrc)

```dunst```(notification deamon,you will need it tho)

```spicetify```(very optional,if you dont want it dont copy spicetify configration file.[How to install?](https://spicetify.app/docs/advanced-usage/installation/))

```waypaper``` (from aur too,wallpaper changer,you have to install Hyprpaper too,optional,remove from auto-exec if you don't want to use Waypaper.)

```grimshot```(optional but you have to change the shortcut,screenshot tool,install it from aur)

```hyprlock```(Lock,if you don't want it you can just not install it and remove exec-once hyprlock bla bla from ```~/hypr/autoexec.conf``` 




2:Configuration files that you might need

To set and view default applications,this is the default apps file: ```~/.config/hypr/defaults.conf```

To change keybinds or staring and thinking what is wrong with Kuruyami,use this file:```~/.config/hypr/keybinds.conf```

And this is the file for the automatically executed apps and commands: ```~/.config/hypr/autoexec.conf```                                                                 

Hyprlock: ```~/.config/hypr/hyprlock.conf```                                                                                                                              

Other things such as blur or animations is in the default Hyprland configration file,which is ```~/.config/hypr/hyprland.conf```



3:GTK themes

Also i recommend installing qt6ct to change themes and icons, simply ```sudo vim ~/etc/environment``` and then add ```QT_QPA_PLATFORMTHEME=qt6ct``` then press ESC, :wq to save and exit.To change theme i reccommend using Kvantum and changing theme in qt6ct application to Kvantum. 




4:Insert text here

For .themes and .icons ,if you dont want to copy it,dont.If .themes and .icons already exists,just copy the things inside of the folder.(themes is not a really important folder tho,it just contains kvantum theme to install manually.And Catppuccin themes are not even important,unless you are me :3)


5:Dolphin default apps issue 

As you might notice that Dolphin doesn't set default apps and Terminal for Hyprland,fix is already in the config.You have to install ```archlinux-xdg-menu``` package 
from arch repo,but if you don't need that fix(Maybe you are using another app,not sure) you can remove the line from auto executed applications,as i mentioned in 2.



6:Another terminal

If you are not going to use Kitty,Fastfetch picture might not work.You have to edit Fastfetch config,thats all right now :)

7:How it looks?:
![2024-08-15T00:15:26,558065655-06:00](https://github.com/user-attachments/assets/7915f884-616f-4fe5-825d-5938eac1e63a) ![2024-08-15T00:19:28,775569791-06:00](https://github.com/user-attachments/assets/7f2f8eba-950d-4ebe-a86a-29992dcbc115)

<p align="center">Report any issue,thanks for using my dots!

