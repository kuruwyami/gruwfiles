Required packages 

An aur helper for installation, paru,yay...

kitty (terminal)

hyprland (Wm)

dolphin (WM)

fastfetch(fast neofetch alternative)

wofi(Like rofi or dmenu,a menu to launch apps)

waybar(bar)

ttf-font-awesome (For waybar icons,if you are using Arch you can install it from aur via paru or yay,others,well not sure you have to search it,sorry)

zsh(shell)

Starship(Prompt)

dunst(notification deamon)

spicetify(optional,if you dont want it dont copy spicetify configration file)

waypaper (from aur too,wallpaper changer,you have to install hyprpaper too)

grimshot(Screenshot tool,install it from aur)

Also i recommend installing qt6ct to change themes and icons, simply ```sudo vim ~/etc/environment``` and then add ```QT_QPA_PLATFORMTHEME=qt6ct``` then press ESC, :wq 

to save and exit.To change theme i reccommend using Kvantum and changing theme in qt6ct application to Kvantum. 

For .themes and .icons ,if you dont want to copy it,dont.If .themes and .icons already exists,just copy the things inside of the folder.(themes is not a really important 

folder tho,it just contains kvantum theme to install manually.And Catppuccin themes are not even important,unless you are me :3)

Not a really information but change keybinds as you need,i use alt instead of super(windows key) because my super key is broken,you can change $mainMod to SUPER via 

```vim ~/.config/hypr/keybinds.conf``` (if you are using nano,you can simply change vim to nano)

To select default applications,edit ~/.config/hypr/defaults.conf

Report any issue.
