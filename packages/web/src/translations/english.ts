const resources = {
  translation: {
    INSULGARD: { TITLE: 'myInsulgard', SUBTITLE: 'Device View', EXPORTDATA: 'EXPORT DATA' },

    ACTIONS: {
      FINISH: 'Finish',
      NEXT: 'Next',
      BACK: 'Back',
      OKAY: 'Okay',
      DONE: 'Done',
      CONTINUE: 'Continue',
      LOG_IN: 'Log In',
      LOG_OUT: 'Log Out',
      CLICK_BUTTON: 'Click the button',
      UPDATE_REDUX: 'Click the button to update the redux store value!',
      CHANGE_LANGUAGE: 'Change Language here!',
      GO_HOME: 'Go to Home',
      GO_TEST: 'Go to Test Page',
      RESEND: 'Resend',
      UPDATE: 'Update',
      REMEMBER: 'Remember Me',
      ENABLE: 'Enable',
      DISABLE: 'Disable',
      CANCEL: 'Cancel',
      DOWNLOAD_DATA: 'Download Data',
      EXTEND: 'Extend',
      DELETE: 'Delete',
      SUBMIT: 'Submit',
      SUBMITCHANGES: 'Submit Changes',
    },
    LABELS: {
      EMAIL: 'Email Address',
      PASSWORD: 'Password',
      NEW_PASSWORD: 'New Password',
      FORGOT_PASSWORD: 'Forgot your password',
      NEED_ACCOUNT: 'Need an account?',
      VIEW_ALL_EVENTS: 'View All {{count}} Events',
    },
    LOCATIONS: {
      SITES: 'Sites',
    },
    MESSAGES: {
      EMAIL_SENT: 'Email Sent',
      WELCOME_NAME: 'Welcome, <1>{{name}}</1>!',
      LOGIN_MESSAGE: "You are 'logged' in",
      CONGRATS: 'Congratulations!',
      CONTACT: 'Contact an Eaton Support Representative',
      ERROR: 'Error!',
      EMAIL_ENTRY_ERROR: 'Please enter a valid email',
      SUCCESS: 'Success',
      FAILURE: 'Failure',
      LOADING: 'Loading...',
    },
    REGISTRATION: {
      EULA: {
        LOADING: 'Loading End User License Agreement...',
        AGREE_TERMS: 'I have read and agree to the Terms & Conditions',
      },
      STEPS: {
        LICENSE: 'License Agreement',
        PASSWORD: 'Create Password',
        ACCOUNT_DETAILS: 'Account Details',
        COMPLETE: 'Account Created!',
      },
      SUCCESS_MESSAGE:
        'Your account has been successfully created with the email <2>{{email}}</2>.To access the Brightlayer Industrial Suite application, use the continue button below.',
      FAILURE_MESSAGE:
        'We were unable to complete your registration. Press continue below to continue to Eaton Brightlayer Industrial suite',
    },
    FORGOT_PASSWORD: {
      ERROR: 'Could not reset your password at this time.',
      INSTRUCTIONS:
        'Please enter the account email associated with the account. <br/><br/>' +
        'If this email has an account with Eaton, you will receive a response within <3>one business day</3>.<br/><br/>' +
        'For urgent account issues, please call ',
      RESET_CODE_ERROR: 'There was an error with your reset code. ',
    },
    LOGIN: {
      INVALID_CREDENTIALS: 'Incorrect Email or Password',
      GENERIC_ERROR: 'Your request could not be processed at this time.',
    },
    FORMS: {
      FIRST_NAME: 'First Name',
      LAST_NAME: 'Last Name',
      PHONE_NUMBER: 'Phone Number',
      PASSWORD: 'Password',
      CONFIRM_PASSWORD: 'Confirm Password',
      PASS_MATCH_ERROR: 'Passwords do not match',
      TOGGLE_PASSWORD_VISIBILITY: 'Toggle password visibility',
      RESET_PASSWORD: 'Reset Password',
    },
    PASSWORD_REQUIREMENTS: {
      LENGTH: '8-16 Characters',
      NUMBERS: 'One digit',
      UPPER: 'One uppercase letter',
      LOWER: 'One lowercase letter',
      SPECIAL: 'Maximum of one Special Character',
    },
    PASSWORD_RESET: {
      SUCCESS_MESSAGE: 'Your password was successfully reset.',
      FAILURE_MESSAGE: 'Your password was unable to be reset. Please try again later.',
    },
    USER_SETTINGS: {
      NAME: 'Name',
      EMAIL: 'Email',
      PHONE_NUMBER: 'Phone Number',
      PHONE_NO_TEXT: 'A mobile number is required in order to receive sms notifications',
      PASSWORD: 'Password',
      EMAIL_NOTIFICATION: 'Email Notifications',
      ENABLED: 'Enabled',
      ORGANIZATION: 'Organization',
      ORGANIZATION_NAME: 'Organization Name',
      ADDRESS: 'Address',
      CHANGE_PASSWORD: 'Change Password',
      ACCOUNT: 'Account',
      TEXT_NOTIFICATION: 'Text Notifications (SMS)',
      TEXT_NOTIFICATION_BODY:
        'Enabling SMS notifications may incur additional text messaging fees with your cellular service provider. These fees are not included in the Eaton Service Agreement.',
      TEXT_NOTIFICATION_TITLE: 'Enable Text Notifications (SMS)',
      WARNING: 'WARNING',
      AUTOMATIC_LOGOUT: 'Automatic Log Out',
      AUTOMATIC_LOGOUT_TITLE: 'Disable automatic log out',
      AUTOMATIC_LOGOUT_SUBTITLE: ' Disable the automatic session expiration of 15 minutes',
      AUTOMATIC_LOGOUT_BODY:
        'This will override a standard security feature included in the application to prevent access to an abandoned session. Please be aware that user will be responsible for protecting the unauthorized access to this system and should never leave this application open when unattended.',
    },
    COUNTER: 'The value is: {{count}}',
    HEADER: {
      FORGOT_PASSWORD: 'Forgot Password',
    },
    ERROR_MESSAGES: {
      '2002': 'User Registration link is Expired or Already Redeemed.',
      '9003': 'Requested operation cannot be performed, please contact your administrator',
      '2018':
        'We are unable to complete your registration. Your Organization has exceeded the number of allotted Users for your subscription. If your Organization requires additional Users, please contact CST Support via email at ',
      GENERIC_ERROR:
        'An unspecified error has occurred. If this issue persists, please contact Eaton Support at  ',
      GENERIC_ERROR_CONTACT_DETAILS: ' or call at ',
    },
    DASHBOARD: {
      ALL_LOCATIONS: 'All Locations',
      CHOOSE_LOCATION: 'Choose Location',
      DEVICES_TITLE: 'Devices',
      ERROR_LOADING_CHANNELS: 'Error Loading Channels',
      ERROR_LOADING_DATA: 'Error Loading Data',
      ERROR_LOADING_DEVICES: 'Error Loading Devices',
      ERROR_LOADING_EVENT: 'Error Loading Event',
      ERROR_LOADING_EVENTS: 'Error Loading Events',
      ERROR_LOADING_LOCATION: 'Error Loading Location',
      ERROR_LOADING_LOCATIONS: 'Error Loading Locations',
      ERROR_LOADING_ORGANIZATION: 'Error Loading Organization',
      ERROR_LOADING_SITE: 'Error Loading Site',
      ERROR_LOADING_SITES: 'Error Loading Sites',
      ERROR_LOADING_TRENDS: 'Error Loading Trends',
      EVENT_NOT_FOUND: 'Event Not Found',
      LOCATION_NOT_FOUND: 'Location Not Found',
      LOCATIONS_TITLE: 'Locations',
      NO_CHANNELS: 'No Channels',
      NO_DATA: 'No Data',
      NO_DEVICES: 'No Devices',
      NO_EVENTS: 'No Alarms',
      NO_LOCATION_SELECTED: 'No Location Selected',
      NO_LOCATIONS: 'No Locations',
      NO_ORGANIZATION_SELECTED: 'No Organization Selected',
      NO_SITES: 'No Sites',
      NO_TRENDS: 'No Trends',
      NO_DATA_POINTS: 'No Data for Date Range Specified',
      NO_CHANNELS_ENABLED: 'No Channels Enabled',
      ORGANIZATION_NOT_FOUND: 'Organization Not Found',
      OVERVIEW_TITLE: 'Overview',
      SITE_NOT_FOUND: 'Site Not Found',
      TIMELINE_TITLE: 'Timeline',
      UNKNOWN_DEVICE_TYPE: 'Unknown',
      ORGANIZATION: 'organizations',
      LOCATION: 'locations',
      SITE: 'sites',
      NO_FOUND: 'No {{entity}} found',
      NOT_ACCESS: 'You don’t have access to any {{entity}} yet.',
      CONTACT_MANAGER: 'Contact your account manager or ',
      NEW_SITE: 'to join or create new {{entity}}.',
      NO_USER_DATA: 'No User Data',
      NO_GRAPH_DATA: 'No Graph Data',

      AUTO_REDIRECT_BANNER: {
        MESSAGE:
          "You've been automatically redirected to {{location}} since you have no other Top-level Locations.",
        ADD_LOCATION_BUTTON: 'Add Location',
        DISMISS: 'Dismiss',
      },
      DASBOARD_REDIRECT_BANNER: {
        MESSAGE:
          'Alarm must be acknowledged directly in the PX Dashboard/PX Gateway software that this device is connected through.',
      },
      LOCATION_CARD: {
        HEADER: {
          SUBTITLE: {
            ALARM: '{{count}} Alarm',
            ALARM_plural: '{{count}} Alarms',
            ALARM_noData: '0 Alarms',
            NORMAL: 'Normal',
            NO_DATA: '0',
          },
          INFO: {
            SITE: '{{count}} Site',
            SITE_plural: '{{count}} Sites',
            SITE_noData: '0 Sites',
            SEPARATOR: ', ',
            DEVICE: '{{count}} Device',
            DEVICE_plural: '{{count}} Devices',
            DEVICE_noData: '0 Devices',
          },
        },
        BODY: {
          ALARMS: '{{count}} Alarm',
          ALARMS_plural: '{{count}} Alarms',
          ALARMS_noData: '0 Alarms',

          EVENTS: '{{count}} Event',
          EVENTS_plural: '{{count}} Events',
          EVENTS_noData: '0 Events',

          ONLINE: 'Online',
          ONLINE_noData: '--',
          OFFLINE: 'Offline',

          OFFLINE_DEVICE: '{{count}} Offline Device',
          OFFLINE_DEVICE_plural: '{{count}} Offline Devices',
          OFFLINE_DEVICES_noData: '0 Offline Device',
        },
        FOOTER: {
          VIEW_LOCATION: 'View Location',
        },
      },

      SITE_CARD: {
        HEADER: {
          SUBTITLE: {
            NO_DATA: '--',
          },
          INFO: {
            DEVICE: '{{count}} Device',
            DEVICE_plural: '{{count}} Devices',
            DEVICE_noData: '0 Devices',
          },
        },
        BODY: {
          ALARMS: '{{count}} Alarm',
          ALARMS_plural: '{{count}} Alarms',
          ALARMS_noData: '0 Alarms',

          EVENTS: '{{count}} Event',
          EVENTS_plural: '{{count}} Events',
          EVENTS_noData: '0 Events',

          ONLINE: 'Online',
          ONLINE_noData: '--',
          OFFLINE: 'Offline',

          OFFLINE_DEVICE: '{{count}} Offline Device',
          OFFLINE_DEVICE_plural: '{{count}} Offline Devices',
          OFFLINE_DEVICES_noData: '0 Offline Device',
        },
        FOOTER: {
          VIEW_LOCATION: 'View Site',
        },
      },

      SITE_DETAILS: {
        ALL_DETAILS: 'All Details',
        ALL_DEVICES: 'All Devices',
        READING_CARDS: {
          VIEW_ALL: 'View All',
          UNKNOWN: 'Unknown',
          PENDING: 'Pending',
          ONLINE: 'Online',
          OFFLINE: 'Offline',
          FULL: 'Full',
          ALARM: 'Alarm',
          BATTERY: 'Battery',
        },
        TRENDS_CARD: {
          TITLE: 'Trends',
          TRENDVIEWER: 'Trendviewer',
          VIEW_ALL: 'View Full Trendviewer',
          CHANNELS: 'Channels',
          DAYS: 'Days',
          DAY: 'Day',
        },
        DEVICES_CARD: {
          TITLE: 'Devices',
          VIEW_ALL: 'View All Devices',
        },
        TIMELINE_CARD: {
          TITLE: 'Timeline',
          VIEW_ALL_EVENTS: 'View All Events',
        },
      },

      TIMELINE_DETAILS: {
        TIMELINE: 'Timeline',
        FUTURE: 'Future',
        TODAY: 'Today',
        YESTERDAY: 'Yesterday',
        THIS_WEEK: 'This Week',
        LAST_WEEK: 'Last Week',
        EARLIER: 'Earlier',
        ACKNOWLEDGED: 'ACKNOWLEDGED',
        CLOSED: 'CLOSED',
        OPEN: 'ACTIVE',
        UNACKNOWLEDGED: 'UNACKNOWLEDGED',
      },
    },
    DEVICE_DETAILS: {
      NO_CHANNEL_DATA: 'No Channel Data',
      NO_DEVICE_DETAILS: 'No Device Details Data',
      NO_DEVICE_CONNECTION: 'No Device Connection Data',
      DEVICE_DETAILS_ERROR: 'Error Loading Device Details',
      CHANNEL_DATA_ERROR: 'No Channel Available',
      DEVICE_CONNECTION_ERROR: 'Error Loading Connection Data',
      EMPTY_VALUE: '--',
      STATUS: 'Status',
      DEVICE_MODEL: 'Device Model',
      DEVICE_SERIAL: 'Device Serial',
      LAST_DATA: 'Last Data',
      ONLINE: 'Online',
      OFFLINE: 'Offline',
      VENDOR: 'Vendor',
      MAC: 'Mac Address',
      ROLE: 'Device Role',
      NAME: 'Name',
      TYPE: 'Device Type',
      DEVICE_FAMILY: 'Family',
    },

    INSULGARD_DEVICE_DETAILS: {
      NO_CHANNEL_DATA: 'No Channel Data',
      NO_DEVICE_DETAILS: 'No Device Details Data',
      NO_DEVICE_CONNECTION: 'No Device Connection Data',
      DEVICE_DETAILS_ERROR: 'Error Loading Device Details',
      CHANNEL_DATA_ERROR: 'Error Loading Channel Data',
      DEVICE_CONNECTION_ERROR: 'Error Loading Connection Data',
      EMPTY_VALUE: '--',
      STATUS: 'Status',
      DEVICE_MODEL: 'Device Model',
      DEVICE_SERIAL: 'Device Serial',
      LAST_DATA: 'Last Data',
      ONLINE: 'Online',
      OFFLINE: 'Offline',
    },
    CHANGE_PASSWORD: {
      PASSWORD_CHANGED: 'Password Changed',
      PASSWORD: 'Change Password',
      SUCCESS_MESSAGE:
        "Your password was successfully updated! To ensure your account's security, you will need to log in to the application with your updated credentials.",
      EMAIL_CONFIRM_MESSAGE: ' We have sent a confirmation email to {{email}}',
      PASSWORD_INFO:
        'Password must be between 8 and 16 characters long and contain at least three of the following character types: Lowercase Letters, Upper Case Letters, Digits or Special Characters.',
      OLD_PASSWORD: 'Old Password',
      ERROR_MESSAGR:
        'Your information did not match our records. Please re- enter your information to try again.',
      PROBLEM_OCCURRED: 'A problem occurred:',
    },
    DRAWER: {
      OVERVIEW: 'Overview',
      TIMELINE: 'Timeline',
      LOCATIONS: 'Locations',
      DEVICES: 'Devices',
      SETTINGS: 'Settings',
      MYPROFILE: 'My Profile',
      MANAGEUSER: 'Manage Users',
      MANAGELOCATION: 'Manage Locations and Sites',
      LEGAL: 'Legal',
      HELP: 'Help',
      COPYRIGHT: '© Copyright 2021 Eaton.',
      RIGHTS_RESERVED: 'All Rights Reserved.',
      SELECT_ACCOUNT: 'Select Account',
    },
    SETTINGS: {
      TITLE: 'Settings',
      SUBTITLE: 'Admin Level - Users',
    },
    LEGAL: {
      TITLE: 'Legal',
      EULA: 'End User License Agreement',
      TERMSANDCONDITIONS: 'Terms and Conditions',
      OPENSOURCELICENSES: 'Open Source Licenses',
    },
    EVENT_TIMELINE: {
      LOAD_MORE_EVENTS: 'Load {{count}} More Events',
      ERROR_LOADING_MORE_EVENTS: 'Error Loading More Events',
    },
    EVENT_DETAILS: {
      TITLE: 'Event Details',
      DEVICE_MODEL: 'Device Model',
      DEVICE_SERIAL: 'Device Serial',
      UNKNOWN: '--',
      EMPTY_VALUE: '',

      NO_DEVICE_DETAILS: 'No Device Details',
      ERROR_LOADING_DEVICE_DETAILS: 'Error Loading Device Details',

      NO_EVENT_DETAILS: 'No Event Details',
      ERROR_LOADING_EVENT_DETAILS: 'Error Loading Event Details',

      THRESHOLD: 'Threshold',

      TIME_ALARM_SENT: 'Time Initial Alarm Sent',
      ALARM_STATUS: 'Initial Alarm Status',
      SET_POINT: 'Setpoint (Threshold)',
      LAST_DATA_RECEIVED: 'Last Alarm Update Received',

      ACKNOWLEDGE: 'Acknowledge',
      ACKNOWLEDGED: 'Acknowledged',
      SENDING: 'Sending...',
      ACKNOWLEDGE_BY: 'Acknowledged by {{user}} ',
      PLEASE_RETRY: 'Please Retry',
      ACKNOWLWEGED_ERROR:
        'Acknowledgment failed to communicate to end device at {{errorDate}}. If this problem continues, please call our support team at {{phoneno}} or email ',
      ACKNOWLEDGE_ALARM: 'Acknowledge Alarm',
      ACKNOWLEDGE_NOTE_1:
        'Use this field to give context or add more information about the alarm, in order to acknowledge it.',
      ACKNOWLEDGE_NOTE_2:
        'Later on it will be possible to see all notes left by every operator on the dedicated alarm page.',
    },
    USER_MENU: {
      LOG_OUT: 'Log Out',
      CONTACT_US: 'Contact Us',
      ACCOUNT_SETTING: 'Account Settings',
    },
    TIMELINE_EXPORT: {
      DOWNLOAD_TITLE: 'Download Timeline Data',
      DOWNLOAD_SUBTITLE_TIMELINE:
        'Select the location and date range of alarm history you would like to export.',
      DOWNLOAD_SUBTITLE_SITE: 'Select date range of alarm history you would like to export.',
    },
    INACTIVITY: {
      TITLE: 'Session Timeout',
      WARNING: 'This window has been inactive for 15 minutes. If no action is taken in ',
      LOGOUT: ', you will be logged out.',
      INACTIVE_LOGOUT: 'Logged out due to inactivity',
    },
    UNSUPPORTED_BROWSER: {
      NOT_SUPPORTED: 'Browser not supported',
      INCOMPATIBLE_BROWSER: 'This web application is incompatible with your current browser.',
      RECOMMENDED_BROWSER:
        'We recommended upgarding to the latest version of Microsoft Edge, Safari, Firefox, or Chrome to use this tool.',
    },
    DISCLAMIER: {
      OVERVIEW: 'Alarm Count represents all active alarms',
      TIMELINE: 'Alarms displayed represent all alarms during the past 90 days',
    },
    ADDUSER: {
      TITLE: 'Add User',
      INVITEUSER: ' Invite User',
      ADDUSERINFORMATION: "User's Account Profile Information",
      ASTERIKSINFO:
        'Fields marked with asterisk(*) are requried fields necessary to invite a user.',
      SELECTROLE: 'Select a Role',
      INVITESUCCESS: 'Invitation Successful!',
      ACCOUNTCREATED: 'The invitation to create an account has been successfully initiated.',
      EMAILRECEIVE:
        'The user will receive an email invite to create their account in 5-10 minutes. You will not be able to see their status until they have accepted the invite.',
    },
    ADDLOCATION: {
      ADDLOCATIONINFORMATION: 'Location Profile Information',
      ASTERIKSINFO: 'Fields marked with an asterisk(*) are required fields {{entity}}.',
    },
    USERLIST: {
      ALL_LOCATION: 'All Locations',
      COL_USERNAME: 'User Name',
      COL_ROLE: 'Role',
      COL_LOCATION: 'Location',
      COL_EMAIL: 'Email',
      COL_STATUS: 'Status',
      DELETEACCOUNT: 'Delete this Account?',
      DELETECONFIRMATION:
        '{{email}} Account and all its data will be permanently removed. Deleting this account will not affect the Organization, Devices, or any related historical data.',
      DELETE_SUCCESS: 'The User Account for {{email}} has been successfully deleted.',
      ACCOUNT_DELETE: 'Account Deleted',
    },
    USERDETAILS: {
      EDIT_SUCCESS: 'User updated successfully',
      RESET_PASSWORD_SUCCESS: 'Reset password email sent successfully.',
      RESET_PASSWORD_ERROR: 'Could not reset your password at this time.',
    },
    EDITUSER: {
      PROMOTE:
        'You have promoted this User to an Org Admin. If you did not mean to do this - select cancel.',
      PROMOTE_CONFIRMATION: ' If this was intended, please submit your change.',
      DEMOTE:
        "You have changed this Org Admin's role. If you did not mean to do this - select cancel.",
      DEMOTE_CONFIRMATION:
        'If this was intended, please make modifications below in the Role/Location section of this form.',
    },
    PHASERESOLVEDGRAPH: {
      TOOLTIP: 'This feature will be available in a future release',
      AXIS_INFORMATION: 'AXIS INFORMATION',
      ASSIST: 'ASSIST',
      Y_AXIS: 'Y-axis Phase Angle, deg',
      X_AXIS: 'X-axis PD Magnitude, mV',
      SELECT_X_AXIS: 'SELECT X-AXIS',
      PPC_PULSE_PER_CYCLE: ' PPC (PULSE PER CYCLE)',
    },
  },
};
export default resources;
