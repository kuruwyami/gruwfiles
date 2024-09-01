import "lib/session"
import "lib/init"
import "style/style"
import options from "options"
import NotificationPopups from "widget/notifications/NotificationPopups"
import PowerMenu from "widget/powermenu/PowerMenu"
import SettingsDialog from "widget/settings/SettingsDialog"
import Verification from "widget/powermenu/Verification"
import { forMonitors } from "lib/utils"
import { setupQuickSettings } from "widget/quicksettings/QuickSettings"
import { setupDateMenu } from "widget/datemenu/DateMenu"

App.config({
    onConfigParsed: () => {
        setupQuickSettings()
        setupDateMenu()
    },
    closeWindowDelay: {
        "overview": options.transition.value,
        "quicksettings": options.transition.value,
        "datemenu": options.transition.value,
    },
    windows: () => [
        ...forMonitors(NotificationPopups),
        PowerMenu(),
        SettingsDialog(),
        Verification(),
    ],
})
