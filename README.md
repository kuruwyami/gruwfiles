Welcome!If you got any issues,first look in this readme file then report it to my Discord username:kuruwyami.I will answer you quick as possible.
  
  
1:Required packages 

An aur helper for installation, paru,yay...

Note:Everything is literally optional lol.

```kitty``` (terminal,see 6)

```hyprland``` (Wm)

```dolphin``` (File manager,optional too.see 5.)

```archlinux-xdg-menu```(For Dolphin,you will need it. :> see 5.) 

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

```pavucontrol```(When you middle click to the voice icon in Waybar,you can edit some settings for audio,highly optional)

```cava```(COnsole-based audio visualizer for Alsa,don't copy cava config file if you don't want it.)

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


7:Icons                                                                                                                      
If icons doesn't work or you are just wondering the source,[click.](https://github.com/jmattheis/gruvbox-dark-icons-gtk)




8:How it looks?:
![image](https://github.com/user-attachments/assets/b31ee9b6-f815-475c-8e03-9d57883318f6)  ![image](https://github.com/user-attachments/assets/f3fa58a5-60a8-448a-a421-1a0138967ef8)



<p align="center">Report any issue,thanks for using my dots!


[![Hits](https://hits.sh/github.com/kuruwyami/kurufiles.svg?style=flat-square&label=Wow!%3A&color=262626&labelColor=262626)](https://hits.sh/github.com/kuruwyami/kurufiles/)

