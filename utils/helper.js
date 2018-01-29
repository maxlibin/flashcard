import {Notifications, Permissions} from "expo";
import {AsyncStorage} from "react-native";

const NOTIFICATION_KEY = "reactflashcardnotification";
export const localNotification = {
  title: "flashCard reminder",
  body: "👋 you haven't been using flashcard for awhile",
  ios: {
    sound: true,
  },
  android: {
    sound: true,
    priority: 'high',
    vibrate: true,
  }
};

export const clearLocalNotifications = () => {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(() => Notifications.cancelAllScheduledNotificationsAsync)
}

export const setLocalNotification = () => {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({status}) => {
            if (status === "granted") {
              Notifications.cancelAllScheduledNotificationsAsync();

              let tomorrow = new Date();
              tomorrow.setDate(tomorrow.getDate() + 1);
              tomorrow.setHours(20);
              tomorrow.setMinutes(0);

              schedulingOptions = {
                time: tomorrow,
                repeat: "minute",
              };

              Notifications.scheduleLocalNotificationAsync(localNotification, schedulingOptions);
              AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
            }
          })
      }
    })
}