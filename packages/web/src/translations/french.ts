const resources = {
  translation: {
    ACTIONS: {
      FINISH: 'Terminer',
      NEXT: 'Prochain',
      BACK: 'Retour',
      OKAY: "d'accord",
      CONTINUE: 'Continuer',
      DONE: 'Terminé',
      LOG_IN: "S'identifier",
      LOG_OUT: 'Se déconnecter',
      CLICK_BUTTON: 'Cliquez sur le bouton',
      UPDATE_REDUX: 'Cliquez sur le bouton pour mettre à jour la valeur du magasin redux!',
      CHANGE_LANGUAGE: 'Changer de langue ici!',
      GO_HOME: 'Aller à la maison',
      GO_TEST: 'Aller à la page de test',
      RESEND: 'Renvoyer',
      UPDATE: 'Mise à jour',
      REMEMBER: 'Souviens-toi de moi',
      ENABLE: 'Activer',
      DISABLE: 'Désactiver',
      CANCEL: 'Annuler',
      DOWNLOAD_DATA: 'Télécharger les données',
      EXTEND: 'Étendre',
    },
    LABELS: {
      EMAIL: 'Adresse e-mail',
      PASSWORD: 'Mot de passe',
      NEW_PASSWORD: 'Nouveau mot de passe',
      FORGOT_PASSWORD: 'Mot de passe oublié',
      NEED_ACCOUNT: 'Besoin dun compte?',
      VIEW_ALL_EVENTS: 'Afficher les {{count}} événements',
    },
    LOCATIONS: {
      SITES: 'Sites',
    },
    MESSAGES: {
      EMAIL_SENT: 'Email envoyé',
      WELCOME_NAME: 'Bienvenue, <1>{{name}}</1>!',
      WELCOME_PROJECT: 'Bienvenue sur Eaton DMS',
      LOGIN_MESSAGE: 'Vous êtes connecté',
      CONGRATS: 'Toutes nos félicitations!',
      CONTACT: 'Contacter un représentant du support Eaton',
      ERROR: 'Erreur!',
      EMAIL_ENTRY_ERROR: "S'il vous plaît entrer un email valide",
      SUCCESS: 'Succès',
      FAILURE: 'Échec',
      LOADING: 'le chargement...',
    },
    REGISTRATION: {
      EULA: {
        LOADING: "Chargement du contrat de licence d'utilisateur final ...",
        AGREE_TERMS: "J'ai lu et j'accepte les conditions générales",
      },
      STEPS: {
        LICENSE: 'Accord de Licence',
        PASSWORD: ' Créer un Mot de Passe',
        ACCOUNT_DETAILS: 'Détails du Compte',
        COMPLETE: 'Compte Créé!',
      },
      SUCCESS_MESSAGE:
        "Votre compte a été créé avec le courrier électronique <2>{{email}}</2>. Votre compte a déjà été ajouté à l'organisation <5>{{organization}}</5>. Appuyez sur Continuer ci-dessous pour continuer vers le Eaton DMS.",
      FAILURE_MESSAGE:
        "Nous n'avons pas pu terminer votre inscription. Appuyez sur Continuer ci-dessous pour continuer vers le Eaton DMS.",
    },
    FORGOT_PASSWORD: {
      ERROR: "Impossible de réinitialiser votre mot de passe pour l'instant",
      INSTRUCTIONS:
        "Entrez l'adresse e-mail du compte associée au compte. <br/><br/>" +
        'Si ce courrier électronique a un compte chez Eaton, vous recevrez une réponse sous <3>un jour ouvrable</3>.<br/><br/>' +
        'Pour les problèmes de compte urgents, veuillez appeler le ',
      RESET_CODE_ERROR: `Une erreur s'est produite avec votre code de réinitialisation. `,
    },
    LOGIN: {
      INVALID_CREDENTIALS: 'Email ou mot de passe incorrect',
      GENERIC_ERROR: "Votre demande n'a pas pu être traitée pour le moment.\n",
    },
    FORMS: {
      FIRST_NAME: 'Prénom',
      LAST_NAME: 'Nom de Famille',
      PHONE_NUMBER: 'Numéro de Téléphone',
      PASSWORD: 'Mot de Passe',
      CONFIRM_PASSWORD: 'Confirmez',
      PASS_MATCH_ERROR: 'Les mots de passe ne correspondent pas',
      TOGGLE_PASSWORD_VISIBILITY: 'Basculer la visibilité du mot de passe',
      RESET_PASSWORD: 'Réinitialiser le Mot de Passe',
    },
    PASSWORD_REQUIREMENTS: {
      LENGTH: '8-16 Caractères',
      NUMBERS: 'chiffre',
      UPPER: 'Une lettre majuscule',
      LOWER: 'Une lettre miniscule',
      SPECIAL: 'Un caractère spécial',
    },
    PASSWORD_RESET: {
      SUCCESS_MESSAGE: 'Votre mot de passe a été réinitialisé avec succès',
      FAILURE_MESSAGE: `Votre mot de passe n'a pas pu être réinitialisé. Veuillez réessayer plus tard.`,
    },
    USER_SETTINGS: {
      Name: 'Nom',
      EMAIL: 'Email',
      PHONE_NUMBER: 'Numéro de téléphone',
      PASSWORD: 'Mot de passe',
      EMAIL_NOTIFICATION: 'Notifications par e-mail',
      ENABLED: 'Activée',
      ORGANIZATION: 'Organisation',
      ORGANIZATION_NAME: "nom de l'organisation",
      ADDRESS: 'Adresse',
      CHANGE_PASSWORD: 'changer le mot de passe',
      ACCOUNT: 'Compte',
      TEXT_NOTIFICATION: 'Notifications texte (SMS)',
      TEXT_NOTIFICATION_BODY:
        "L'activation des notifications par SMS peut entraîner des frais de messagerie texte supplémentaires avec votre fournisseur de services cellulaires. Ces frais ne sont pas inclus dans le contrat de service Eaton.",
      TEXT_NOTIFICATION_TITLE: 'Activer les notifications par SMS (SMS)',
      WARNING: 'AVERTISSEMENT',
      AUTOMATIC_LOGOUT: 'Déconnexion automatique',
      AUTOMATIC_LOGOUT_TITLE: 'Désactiver la déconnexion automatique',
      AUTOMATIC_LOGOUT_SUBTITLE: "Désactiver l'expiration automatique de la session de 15 minutes",
      AUTOMATIC_LOGOUT_BODY:
        "Cela remplacera une fonction de sécurité standard incluse dans l'application pour empêcher l'accès à une session abandonnée. Veuillez noter que l'utilisateur sera responsable de la protection de l'accès non autorisé à ce système et ne doit jamais laisser cette application ouverte sans surveillance.",
    },
    COUNTER: 'La valeur est: {{count}}',
    HEADER: {
      FORGOT_PASSWORD: 'Mot de passe oublié',
    },
    ERROR_MESSAGES: {
      '2002': "Le lien d'enregistrement de l'utilisateur est déjà utilisé.",
      '9003':
        "L'opération demandée ne peut pas être effectuée, veuillez contacter votre administrateur",
      GENERIC_ERROR:
        " Une erreur non spécifiée s'est produite. Si ce problème persiste, veuillez contacter le support Eaton à l'adresse ",
      GENERIC_ERROR_CONTACT_DETAILS: ' ou appelez au ',
    },
    DASHBOARD: {
      ALL_LOCATIONS: 'Tous les emplacements',
      CHOOSE_LOCATION: "Choisissez l'emplacement",
      DEVICES_TITLE: 'Dispositifs',
      ERROR_LOADING_CHANNELS: 'Erreur lors du chargement des chaînes',
      ERROR_LOADING_DATA: 'Erreur lors du chargement des données',
      ERROR_LOADING_DEVICES: 'Erreur lors du chargement des périphériques',
      ERROR_LOADING_EVENT: "Erreur lors du chargement de l'événement",
      ERROR_LOADING_EVENTS: 'Erreur lors du chargement des événements',
      ERROR_LOADING_LOCATION: "Erreur lors du chargement de l'emplacement",
      ERROR_LOADING_LOCATIONS: 'Erreur lors du chargement des emplacements',
      ERROR_LOADING_ORGANIZATION: "Erreur lors du chargement de l'organisation",
      ERROR_LOADING_SITE: 'Erreur lors du chargement du site',
      ERROR_LOADING_SITES: 'Erreur lors du chargement des sites',
      ERROR_LOADING_TRENDS: 'Tendances de chargement des erreurs',
      EVENT_NOT_FOUND: 'Événement introuvable',
      LOCATION_NOT_FOUND: 'Emplacement introuvable',
      LOCATIONS_TITLE: 'Emplacements',
      NO_CHANNELS: 'Aucune chaîne',
      NO_DATA: 'Pas de données',
      NO_DEVICES: 'Aucun appareil',
      NO_EVENTS: "Pas d'alarmes",
      NO_LOCATION_SELECTED: 'Aucun emplacement sélectionné',
      NO_LOCATIONS: 'Aucun emplacement',
      NO_ORGANIZATION_SELECTED: 'Aucune organisation sélectionnée',
      NO_SITES: 'Aucun site',
      NO_DATA_POINTS: 'Aucune donnée pour la plage de dates spécifiée',
      NO_TRENDS: 'Aucune tendance',
      ORGANIZATION_NOT_FOUND: 'Organisation introuvable',
      OVERVIEW_TITLE: 'Aperçu',
      SITE_NOT_FOUND: 'Site introuvable',
      TIMELINE_TITLE: 'Chronologie',
      UNKNOWN_DEVICE_TYPE: 'Inconnue',
      ORGANIZATION: 'organisation',
      LOCATION: 'emplacement',
      SITE: 'site',
      NO_FOUND: 'Non {{entity}} a trouvé',
      NOT_ACCESS: "Vous n'avez accès à aucun {{entity}} encore.",
      CONTACT_MANAGER: 'Contactez votre gestionnaire de compte ou ',
      NEW_SITE: 'rejoindre ou créer un nouveau {{entity}}.',
      NO_USER_DATA: 'Aucune donnée utilisateur',

      AUTO_REDIRECT_BANNER: {
        MESSAGE:
          "Vous avez été automatiquement redirigé vers {{location}} car vous n'avez pas d'autres emplacements de premier niveau.",
        ADD_LOCATION_BUTTON: 'Ajouter un emplacement',
        DISMISS: 'Rejeter',
      },

      LOCATION_CARD: {
        HEADER: {
          SUBTITLE: {
            ALARM: '{{count}} Alarme',
            ALARM_plural: '{{count}} Alarmes',
            ALARM_noData: '0 Alarmes',
            NORMAL: 'Ordinaire',
            NO_DATA: '--',
          },
          INFO: {
            SITE: '{{count}} Site',
            SITE_plural: '{{count}} Sites',
            SITE_noData: '0 Sites',
            SEPARATOR: ', ',
            DEVICE: '{{count}} Appareil',
            DEVICE_plural: '{{count}} Appareils',
            DEVICE_noData: '0 Appareil',
          },
        },
        BODY: {
          ALARMS: '{{count}} Alarme',
          ALARMS_plural: '{{count}} Alarmes',
          ALARMS_noData: '0 Alarmes',

          EVENTS: '{{count}} Événement',
          EVENTS_plural: '{{count}} Événements',
          EVENTS_noData: '0 Événements',
        },
        FOOTER: {
          VIEW_LOCATION: "Afficher l'emplacement",
        },
      },

      SITE_CARD: {
        HEADER: {
          SUBTITLE: {
            NO_DATA: '--',
          },
          INFO: {
            DEVICE: '{{count}} Appareil',
            DEVICE_plural: '{{count}} Appareils',
            DEVICE_noData: '0 Appareils',
          },
        },
        BODY: {
          ALARMS: '{{count}} Alarme',
          ALARMS_plural: '{{count}} Alarmes',
          ALARMS_noData: '0 Alarmes',

          EVENTS: '{{count}} Événement',
          EVENTS_plural: '{{count}} Événements',
          EVENTS_noData: '0 Événements',

          ONLINE: 'En ligne',
          ONLINE_noData: '--',
          OFFLINE: 'Hors ligne',
        },
        FOOTER: {
          VIEW_LOCATION: 'Voir le site',
        },
      },

      SITE_DETAILS: {
        ALL_DETAILS: 'Tous les détails',
        ALL_DEVICES: 'Tous les dispositifs',
        TIMELINE: 'Chronologie',
        READING_CARDS: {
          VIEW_ALL: 'Voir tout',
          UNKNOWN: 'Inconnue',
          PENDING: 'En attente',
          ONLINE: 'En ligne',
          OFFLINE: 'Hors ligne',
          FULL: 'Plein',
          ALARM: 'Alarme',
          BATTERY: 'Batterie',
        },
        TRENDS_CARD: {
          TITLE: 'Les tendances',
          TRENDVIEWER: 'TrendViewer',
          VIEW_ALL: 'Voir le TrendViewer complet',
          CHANNELS: 'Chaînes',
          DAYS: 'Journées',
          DAY: 'Journée',
        },
        DEVICES_CARD: {
          TITLE: 'Dispositifs',
          VIEW_ALL: 'Voir Tout Dispositifs',
        },
        TIMELINE_CARD: {
          TITLE: 'Chronologie',
          VIEW_ALL_EVENTS: 'Voir tous les événements',
        },
      },

      TIMELINE_DETAILS: {
        TIMELINE: 'Chronologie',
        FUTURE: 'Futur',
        TODAY: "Aujourd'hui",
        YESTERDAY: 'Hier',
        THIS_WEEK: 'Cette Week',
        LAST_WEEK: 'Dernier Week',
        EARLIER: 'Plus tôt',
        ACKNOWLEDGED: 'REMERCIÉ',
        CLOSED: 'FERMÉ',
        OPEN: 'ACTIVE',
        UNACKNOWLEDGED: 'SANS RECONNAISSANCE',
      },
    },
    DEVICE_DETAILS: {
      NO_CHANNEL_DATA: `Aucune donnée de canal`,
      NO_DEVICE_DETAILS: `Aucune donnée sur les détails de l'appareil`,
      NO_DEVICE_CONNECTION: `Aucune donnée de connexion de périphérique`,
      DEVICE_DETAILS_ERROR: 'Erreur lors du chargement des détails du périphérique',
      CHANNEL_DATA_ERROR: 'Erreur lors du chargement des données de chaîne',
      DEVICE_CONNECTION_ERROR: 'Erreur lors du chargement des données de connexion',
      EMPTY_VALUE: '--',
      STATUS: 'Statut',
      DEVICE_MODEL: `Modèle d'appareil`,
      DEVICE_SERIAL: 'Périphérique série',
      LAST_DATA: 'Dernières données',
      ONLINE: 'En ligne',
      OFFLINE: 'Hors ligne',
    },
    CHANGE_PASSWORD: {
      PASSWORD_CHANGED: 'Mot de passe changé',
      PASSWORD: 'Changer le mot de passe',
      SUCCESS_MESSAGE:
        "Votre mot de passe a été mis à jour avec succès! Pour garantir la sécurité de votre compte, vous devrez vous connecter à l'application avec vos informations d'identification mises à jour.",
      EMAIL_CONFIRM_MESSAGE: 'Nous avons envoyé un e-mail de confirmation à',
      PASSWORD_INFO:
        'Le mot de passe doit comprendre entre 8 et 16 caractères et contenir au moins trois des types de caractères suivants: lettres minuscules, lettres majuscules, chiffres ou caractères spéciaux.',
      OLD_PASSWORD: 'ancien mot de passe',
      ERROR_MESSAGR:
        'Vos informations ne correspondent pas à nos enregistrements. Veuillez saisir à nouveau vos informations pour réessayer.',
      PROBLEM_OCCURRED: 'Un problème est survenu:',
    },
    DRAWER: {
      OVERVIEW: 'Aperçu',
      TIMELINE: 'Chronologie',
      LOCATIONS: 'Emplacements',
      DEVICES: 'Dispositifs',
      SETTINGS: 'Réglages',
      MYPROFILE: 'Mon profil',
      MANAGEUSER: 'Gérer les sites et les utilisateurs',
      LEGAL: 'Légal',
      HELP: 'Aidez-moi',
      COPYRIGHT: '© Copyright 2020 Eaton.',
      RIGHTS_RESERVED: 'Tous les Droits Sont Réservés,',
      SELECT_ACCOUNT: 'Sélectionner Compte',
    },
    SETTINGS: {
      TITLE: 'Réglages',
      SUBTITLE: 'Niveau administrateur - Sites et utilisateurs',
    },
    LEGAL: {
      TITLE: 'Légale',
      EULA: "Contrat de licence de l'utilisateur final",
      TERMSANDCONDITIONS: 'Termes et conditions',
      OPENSOURCELICENSES: 'Licences Open Source',
    },
    EVENT_TIMELINE: {
      VIEW_ALL: 'Voir les {{count}} événements par mois',
      ERROR_LOADING_MORE_EVENTS: `Erreur lors du chargement d'autres événements`,
    },
    EVENT_DETAILS: {
      TITLE: "Détails de l'évènement",
      DEVICE_MODEL: 'Dispositif modal',
      DEVICE_SERIAL: 'Périphérique série',
      UNKNOWN: '--',
      EMPTY_VALUE: '',

      NO_DEVICE_DETAILS: "Aucun détail sur l'appareil",
      ERROR_LOADING_DEVICE_DETAILS: 'Erreur lors du chargement des détails du périphérique',

      NO_EVENT_DETAILS: "Aucun détail d'événement",
      ERROR_LOADING_EVENT_DETAILS: "Erreur lors du chargement des détails de l'événement",

      THRESHOLD: 'Seuil',

      TIME_ALARM_SENT: 'Alarme horaire envoyée',
      TIME_EVENT_SENT: 'Événement de temps envoyé',

      ALARM_STATUS: "État initial de l'alarme",
      EVENT_STATUS: "Statut de l'événement",

      LAST_READING: 'Point de consigne (seuil)',
      LAST_DATA_RECEIVED: 'Dernières données reçues',

      ACKNOWLEDGE: 'Reconnaître',
      ACKNOWLEDGED: 'Reconnu',
      SENDING: 'Envoi en cours...',
      ACKNOWLEEDGE_BY: 'Reconnu par ',
      PLEASE_RETRY: 'Veuillez réessayer',
      ACKNOWLWEGED_ERROR:
        "L'accusé de réception n'a pas pu communiquer avec le terminal {{errorDate}}. Si ce problème persiste, veuillez appeler notre équipe d'assistance à {{phoneno}} ou email ",
      ACKNOWLEDGE_ALARM: "Acquitter l'alarme",
      ACKNOWLEDGE_NOTE_1:
        "Utilisez ce champ pour donner du contexte ou ajouter plus d'informations sur l'alarme, afin de l'acquitter.",
      ACKNOWLEDGE_NOTE_2:
        "Plus tard, il sera possible de voir toutes les notes laissées par chaque opérateur sur la page d'alarme dédiée.",
    },
    USER_MENU: {
      LOG_OUT: 'Se déconnecter',
      CONTACT_US: 'Nous contacter',
      ACCOUNT_SETTING: 'Paramètres du compte',
    },
    TIMELINE_EXPORT: {
      DOWNLOAD_TITLE: 'Télécharger les données de chronologie',
      DOWNLOAD_SUBTITLE_TIMELINE:
        "Sélectionnez l'emplacement et la plage de dates de l'historique des alarmes que vous souhaitez exporter.",
      DOWNLOAD_SUBTITLE_SITE:
        "Sélectionnez la plage de dates de l'historique des alarmes que vous souhaitez exporter.",
    },
    INACTIVITY: {
      TITLE: 'Expiration de la session',
      WARNING: "Cette fenêtre est inactive depuis 15 minutes. Si aucune action n'est entrepris",
      LOGOUT: ', vous serez déconnecté.',
      INACTIVE_LOGOUT: "Déconnecté en raison de l'inactivité",
    },
    UNSUPPORTED_BROWSER: {
      NOT_SUPPORTED: 'Navigateur non pris en charge',
      INCOMPATIBLE_BROWSER: 'Cette application Web est incompatible avec votre navigateur actuel.',
      RECOMMENDED_BROWSER:
        'Nous avons recommandé de passer à la dernière version de Microsoft Edge, Safari, Firefox ou Chrome pour utiliser cet outil.',
    },
    DISCLAMIER: {
      OVERVIEW: "Le nombre d'alarmes représente toutes les alarmes actives",
      TIMELINE: 'Les alarmes affichées représentent toutes les alarmes des 90 derniers jours',
    },
    ADDUSER: {
      TITLE: 'Ajouter un utilisateur',
      INVITEUSER: 'Inviter un utilisateur',
      ADDUSERINFORMATION: "Ajouter les informations de l'utilisateur",
      ASTERIKSINFO:
        "Les champs marqués d'un astérisque (*) sont obligatoires pour inviter l'utilisateur.",
      SELECTROLE: "Sélectionnez le rôle de l'utilisateur",
      INVITESUCCESS: 'Invitation réussie!',
      ACCOUNTCREATED: "L'invitation à créer un compte a été créée avec succès.",
      EMAILRECEIVE:
        "L'utilisateur recevra un e-mail d'invitation à créer son compte sous 1 à 2 jours ouvrés. Vous ne pourrez pas voir leur statut tant qu'ils n'auront pas accepté l'invitation.",
    },
    USERLIST: {
      ALL_LOCATION: 'Tous les emplacements',
      COL_USERNAME: "Nom d'utilisateur",
      COL_ROLE: 'Rôle',
      COL_LOCATION: 'Emplacement',
      COL_EMAIL: 'Email',
      COL_STATUS: 'Statut',
      DELETEACCOUNT: 'Supprimer ce compte?',
      DELETECONFIRMATION:
        "Ce compte et toutes ses données seront définitivement supprimés. La suppression de ce compte n'affectera pas l'organisation, les appareils ou les données historiques associées.",
    },
  },
};
export default resources;
