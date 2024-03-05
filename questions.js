let MCQS = [
  {
    question: "Quel fonction permet de se défendre contre les injections SQL?",
    choice1: "htmlentities()",
    choice2: "mysqli_real_escape_string()",
    choice3: "nosql()",
    choice4: "sql_entities()",
    answer: 1,
  },
  {
    question:
      "Quel moyen de prévention parmis les suivants est recommandé contre l'injection SQL?",
    choice1: "Ne pas faire de liens vers les pages faillibles",
    choice2: "Desactiver Javascript du navigateur",
    choice3: "Ne pas afficher les messages d'erreur sur les pages web",
    choice4: "Couper sa connection internet",
    answer: 2,
  },
  {
    question: "Qu'est-ce que l'OWASP?",
    choice1: "Un type de routage dynamique",
    choice2:
      "Une organisation visant à améliorer la sécurité des logiciels.",
    choice3: "Un scanner de vulnérabilté",
    choice4: "Une organisation cyber criminelle d'enfants Soviétiques",
    answer: 1,
  },
  {
    question: "Qu'est ce que l'ANSSI",
    choice1:
      "L'autorité nationale en matière de sécurité et de défense des SI.",
    choice2: "Un protocole de communication",
    choice3: "La réponse C",
    choice4: "Un groupe de rock chrétien préchant la bonne parole",
    answer: 0,
  },
  {
    question: "Qu'est-ce que l'attaque brute force par dictionnaire?",
    choice1: "Une attaque frontale avec le petit Robert.",
    choice2: "Une attaque qui teste un ensemble prédéfini de mots.",
    choice3: "Une attaque qui teste des mots au hasard.",
    choice4: "Une attaque avec des injections XSS.",
    answer: 1,
  },
  {
    question: "Qu'est ce que le top 10 de l'OWASP",
    choice1: "Un classement des meilleurs hackers mondiaux.",
    choice2: "Une liste des organisations les plus attaquées sur le Web.",
    choice3: "Un listing des vunérabilités Web les plus populaires.",
    choice4: "Un listing des chômeurs les mieux payés de France.",
    answer: 2,
  },
  {
    question: "Que fais l'IETF?",
    choice1: "Un serveur VPN",
    choice2: "Il crée des modules de supervision",
    choice3:
      "Il élabore et promeut des standards Internet",
    choice4: "Il crée des trojans à but non-lucratif",
    answer: 3,
  },
  {
    question: "C'est quoi le RFC 1918?",
    choice1: "Le club de foot du racing club de Strasbourg",
    choice2:
      "Un document signé par le maréchal Pétin à la fin de la guerre 14-18",
    choice3:
      "un document technique qui définit des plages d'adresses IP privées réservées",
    choice4: "Une authentification à 2 facteurs",
    answer: 2,
  },
  {
    question: "Qu'est ce qu'une attaque par dénis de service (DDOS)?",
    choice1:
      "Une attaque consistant à injecter des commandes sur un site Web via un champs donné.",
    choice2: "Une attaque consistant à supprimer du contenu à distance.",
    choice3: "Une attaque consistant à surcharger les ressources d'un système.",
    choice4: "Une attaque par brute force.",
    answer: 2,
  },
  {
    question: "Pourquoi utilise-t'on des caches DNS?",
    choice1: "Pour mettre à jour son système d'exploitation.",
    choice2: "Pour bloquer des sites si besoin.",
    choice3: "Pour accélérer les requêtes.",
    choice4: "Pour configurer un VPN.",
    answer: 2,
  },
  {
    question: "Que fais le PDU data ?",
    choice1: "Il standardise les communications",
    choice2:
      "Il désigne les données encapsulées dans une unité de protocole spécifique",
    choice3: "Il automatise la création de VMs",
    choice4: "Il crée des données dans le cloud",
    answer: 1,
  },
  {
    question: "De combien de couches est composées le modèle OSI?",
    choice1: "7",
    choice2: "6",
    choice3: "5",
    choice4: "4",
    answer: 0,
  },
  {
    question:
      "Lesquel de ces type de routages est un protocole de routage dynamique?",
    choice1: "OWASP",
    choice2: "IEE",
    choice3: "La route 66",
    choice4: "OSPF",
    answer: 3,
  },
  {
    question: "Qu'est-ce que Base64?",
    choice1: "Un algorithme permettant de chiffrer des données.",
    choice2: "Un codage d'information réversible",
    choice3: "Une base de donnée",
    choice4:
      "Une base militaire située dans le département des Pyrénées-Atlantiques.",
    answer: 1,
  },
  {
    question: "Qu'est-ce qu'un VLAN?",
    choice1:
      "Un réseau logique isolé créé à partir d'un réseau physique.",
    choice2: "Un équilibreur de charges",
    choice3: "La passion de Florent",
    choice4: "Une base de données SQL",
    answer: 0,
  },
  {
    question: "Qu'est-ce que le SOA record?",
    choice1:
      "Une entrée fournissant des détails essentiels sur la gestion de la zone DNS.",
    choice2: "Un groupe de musique hippie sous acide dans les années 70",
    choice3:
      "Un type d'enregistrement DNS qui mappe un nom de domaine à une adresse IPv4.",
    choice4: "La réponse D",
    answer: 0,
  },
  {
    question: "C'est quoi LDAP?",
    choice1: "Une secte neo évangesliste",
    choice2: "Un scanner de vulnérabilité",
    choice3: "Un protocole Web",
    choice4:
      "Un protocole utilisé pour accéder et gérer des services d'annuaire informatique.",
    answer: 3,
  },
  {
    question: "C'est quoi SMB?",
    choice1:
      "Un protocole de partage de fichiers et d'imprimantes.",
    choice2: "Un type de serveur Web",
    choice3: "Salade, mayonnaise, barbecue",
    choice4: "Une marque de firewall",
    answer: 0,
  },
  {
    question: "Qu'est-ce que WSUS?",
    choice1: "Une marque d'ordinateur",
    choice2: "Un outil de gestion des mises à jour pour les systèmes Windows.",
    choice3: "Un type de stockage",
    choice4: "Une espèce marine créer dans les laboratoire de Google",
    answer: 1,
  },
  {
    question:
      "Lequel de ces protocoles aide à se protéger contre le sniffing réseau?",
    choice1: "HTTP",
    choice2: "SMTP",
    choice3: "ARP",
    choice4: "HTTPS",
    answer: 3,
  },
  {
    question: "Quel est le rôle d'un SIEM?",
    choice1: "Equilibrer la charge sur le réseau",
    choice2:
      "Surveiller et analyser les données de sécurité pour détecter les menaces potentielles.",
    choice3: "Garantir l'intégrité des communications",
    choice4: "Allumer les leds sur les équipements réseau",
    answer: 1,
  },
  {
    question:
      "Laquelles de ces propositions ne fait pas partie des 4 piliers de la sécurité informatique?",
    choice1: "Disponibilité",
    choice2: "La transversalité",
    choice3: "L'intégrité",
    choice4: "L'authenticité",
    answer: 1,
  },
  {
    question: "à quoi sert iSCSI?",
    choice1:
      "Il permet de connecter des périphériques de stockage à distance à des serveurs via un réseau IP.",
    choice2: "Il met à jour les postes clients sur un réseau",
    choice3: "Il scanne les ports ouverts sur un réseau",
    choice4: "Il est imprononcable alors il ne sert sûrement pas à grand chose",
    answer: 0,
  },
  {
    question: "Qu'est-ce qu'un Black hat?",
    choice1: "Une marque de café originaire du Brésil",
    choice2: "Un héros de Manga",
    choice3: "Un hacker éthique",
    choice4: "Un hacker malveillant",
    answer: 3,
  },
  {
    question: "A quoi sert un Exploit?",
    choice1:
      "C'est un programme ou une technique qui exploite une vulnérabilité.",
    choice2: "C'est un danger potentielle sur un système",
    choice3: "C'est un malware",
    choice4: "C'est une action remarquable",
    answer: 0,
  },
  {
    question: "C'est quoi MDT?",
    choice1: "Une maladie sexuellement transmissible",
    choice2: "Une drogue de synthèse bolivienne",
    choice3: "Un périphérique de stockage",
    choice4:
      "Un ensemble d'outils pour le déploiement automatisé de systèmes d'exploitation Windows.",
    answer: 3,
  },
  {
    question: "Quelle est la plus grosse faille?",
    choice1: "Le système",
    choice2: "Le réseau",
    choice3: "L'être humain",
    choice4: "La faille géologique de San Andreas",
    answer: 2,
  },
  {
    question: "Qu'est-ce qu'un hash?",
    choice1: "Une empreinte d'une donnée/d'un fichier",
    choice2: "Un morceau de mot de passe",
    choice3: "Un fichier Zip",
    choice4: "Un produit autorisé aux Pays-Bas",
    answer: 0,
  },
  {
    question: "C'est quoi CIFS?",
    choice1: "Une distribution Linux",
    choice2: "Un type de chiffrement",
    choice3:
      "Un protocole Windows de partage de fichiers réseau utilisé pour permettre le partage de ressources.",
    choice4: "Un composant de carte mère",
    answer: 2,
  },
  {
    question: "Qu'est-ce qu'un chiffrement asymétrique?",
    choice1: "Un chiffrement qui utilise des clés publiques uniquement.",
    choice2:
      "Un chiffrement qui utilise une clé privée pour déchiffrer et une clé publique pour chiffrer",
    choice3: "Un chiffrement avec des chiffres aléatoires",
    choice4: "Une nouvelle formule géométrique",
    answer: 1,
  },
  {
    question: "C'est quoi Syslog?",
    choice1: "Un connecteur réseau",
    choice2: "Un outil de supervision des métriques",
    choice3: "Une extension de navigateur Web",
    choice4:
      "Un protocole de journalisation système.",
    answer: 3,
  },
  {
    question: "Qu'est-ce qu'un SOC?",
    choice1: "Un anti-virus",
    choice2:
      "Un centre opérationnel chargé de surveiller et de gérer en temps réel la sécurité des SI",
    choice3: "Une solution de sauvegarde immuable",
    choice4: "Un type de pare-feu nouvelle génération",
    answer: 1,
  },
  {
    question: "C'est quoi un SAN?",
    choice1: "C'est l'èleve de Maitre Miagui dans Karaté kid",
    choice2:
      "Un SAN est un réseau dédié pour le stockage de données.",
    choice3: "Un protocole de mise en cache dans le navigateur",
    choice4: "Un language de programmation",
    answer: 1,
  },
  {
    question: "C'est quoi EXT4?",
    choice1:
      "Un système de fichiers utilisé sur les systèmes d'exploitation Linux",
    choice2: "Un protocole de chiffrement",
    choice3: "Un protocole de stockage",
    choice4: "Un anti-virus",
    answer: 0,
  },
  {
    question: "Qu'est-ce que le PSSI?",
    choice1: "Un centre de détection d'incident",
    choice2: "Le parti socialiste des systèmes d'informations",
    choice3:
      "Un plan de sauvegarde et de sécurité des informations, visant à protéger les données sensibles d'une organisation.",
    choice4: "Un outil de détection d'intrusion",
    answer: 2,
  },
  {
    question: "C'est quoi un PRA?",
    choice1:
      "Un plan élaboré pour maintenir la continuité des activités en cas de sinistre majeur.",
    choice2: "Une méthode de développement de logiciels",
    choice3: "Un protocole Wi-fi",
    choice4: "Une technique d'ofuscation pour bypasser les anti-virus",
    answer: 0,
  },
  {
    question: "C'est quoi SMSI?",
    choice1: "Un système de surveillance du réseau",
    choice2: "Un protocole de routage dynamique",
    choice3: "Un gestionnaire de mot de passe",
    choice4:
      "Un ensemble de mesures visant à protéger les informations sensibles d'une organisation.",
    answer: 3,
  },
  {
    question: "A quoi servent les base de données de vulnérabilités?",
    choice1: "Elles servent à montrer qu'il est facile de se faire pirater",
    choice2: "Elles servent à mettre en avant les outils à éviter",
    choice3:
      "Elles servent à garder une trace des vulnérabilités de facon standardisée",
    choice4: "Elles servent à décorer le Web les veilles de fête",
    answer: 2,
  },
  {
    question: "C'est quoi ISO 27001?",
    choice1: "Une norme pour le management de la sécurité de l'information.",
    choice2: "Une image pour installer un système d'exploitation",
    choice3: "Une méthode de déploiement de logiciels",
    choice4: "Un protocole Web",
    answer: 0,
  },
  {
    question: "Comment éviter la faille XSS?",
    choice1: "En utilisant des validations coté serveur.",
    choice2: "En utilisant des attributs html spécifiques.",
    choice3: "En utilisant un firewall.",
    choice4: "En bloquant les ADS sur sa page d'accueil.",
    answer: 0,
  },
];
