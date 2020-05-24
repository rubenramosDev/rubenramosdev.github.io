let language = {
    eng: {
        subheading: 'Hey! I am',
        im: 'I\'m an',
        aboutme: 'About Me.',
        aboutmetext: 'For me, the nature of TI, it\'s to find a precise solution to problems with innovation as a result of it ...',
        aboutmetexttwo: 'To set goals, collaborate and work as a team, in my opinion, it\'s the perfect combination to achieve solutions and get things done.',
        name: 'Name:',
        date: 'Born date:',
        addresss: 'Address:',
        phone: 'Phone:',
        language: 'Languages:',
        mes: 'August',
        languagetwo: 'English: TOEFL 570 || French: DELF B1 || Spanish: Mother tongue',
        cv: 'Download my CV',
        checkout: 'Take a look.',
        mygit: 'My Github page',
        education: 'Education',
        experience: 'Experience',
        skills: 'Skills',
        ed1: '2018 - In progress',
        ede1: 'Technical Degree - TI -Cross-platform development',
        ed2: '2014-2015',
        ede2: 'Industrial Engineering',
        ede3: 'High school',
        ede3a: 'Economics',
        exp1h: 'Call center attention- HP',
        exp1t: 'Solving technical problems - TTEC',
        exp1t2: 'Assisting customers with a solution of technical problems. Awarded by HP latino América as a top performer.',
        exp2h: 'Accounting assistant',
        exp2t: 'Red Cross México',
        exp2t2: 'Helping out with with accounts balances.',
        exp3h: 'Initial inspector - Tire retreading',
        exp3t: 'Southern Tire Mart',
        exp3t3: 'Inspection and compliance of requirements from different brands',
        habpro: 'Programming skills',
        javd: 'Java is my favorite programming language, it\'s such a powerful and robust language. JavaFX, Java Android, Java EE, Spring boot, ORM and JPA.',
        nojd: 'Node.js is a great run-time environment, so flexible and fast. Express, Handlebars, NPM.',
        mysqld: 'Database mocking and database management.',
        flutterd: 'Flutter is just great ! I am an enthusiast of this cross-platform framework...',
        scrum: 'SCRUM methodology',
        scrumd: 'Work and communication as team to handle and solve problems  !',
        desingP: 'Software patterns and software architecture',
        patd1: 'Each problem needs an specific solution...',
        patd2: 'MVC, Prototype, Singleton, BLoC, SOA',
        conoc: 'Experience with...'
    },
    fr: {
        subheading: 'Salut ! Je suis',
        im: 'Je suis un',
        aboutme: 'About Me .',
        aboutmetext: 'Je considère que le but les plus important des technologies de l\'information , c\'est saisir une solution au moyen de l\'innovation...',
        aboutmetexttwo: 'Fixer des objectifs, collaborer et travailler en equipe, à mon avis, c\'est le chemin ideal pour concréter des projets et des solutions.',
        name: 'Nom et prénom:',
        date: 'Date de naissance:',
        addresss: 'Address:',
        phone: 'Téléphone:',
        language: 'Langues:',
        mes: 'Août',
        languagetwo: 'Anglais : TOEFL 570 || Français : DELF B1 || Espagnol : Langue maternelle',
        cv: 'Téléchager mon CV',
        checkout: 'Take a look.',
        mygit: 'Mon Github',
        education: 'Education',
        experience: 'Experience',
        skills: 'Compétences en programmation',
        ed1: '2018-Actualité',
        ede1: 'TSU - Les technologies de l\'information et de la communication - Logiciel multiplateforme',
        ed2: '2014-2015 Non-conclu',
        ede2: 'Ingénierie industrielle',
        ede3: 'Baccalauréat',
        ede3a: 'Domaine : Economie et administration',
        exp1h: 'Attention au client - HP',
        exp1t: 'Solution aux problèmes techniques - TTEC',
        exp1t2: 'Soutien du service à la clientèle. Reconnaissance pour HP Latino-América comme Top Performer.',
        exp2h: 'Assistant comptable',
        exp2t: 'Cross Rouge',
        exp2t2: 'Soutien en équilibre financier, gestion de compte bancaire et processus achat/vente.',
        exp3h: 'Inspection du produit - Contrôle de la qualité dans le processus de fabrication des pneus',
        exp3t: 'Southern Tire Mart',
        exp3t3: 'Inspecter, surveiller et respecter les exigences de différents clients.',
        habpro: 'Competences',
        javd: 'Java, c\'est ma langage de programmation preferé !. J\'ai des petits projets avec JavaFX, Java Android, Java EE, Spring boot, ORM, JPA.',
        nojd: 'Node.js, c\'est une plateforme logicielle très performante et vraiment amusante, en plus, JS est une langage versatile et polyvalent. J\'ai des projets avec Express et Handlebars',
        mysqld: 'J\'ai des connaissances de base en les dessins et modèles des bases de données relationnelles et non relationnelles.',
        flutterd: 'J\'ai adore le developpement flutter ! Je suis un enthousiaste de ce framework...',
        scrum: 'Méthodologie scrum',
        scrumd: 'Travailler en équipe pour mieux contrôler et planifier',
        desingP: 'Software design pattern et Patron d\'architecture',
        patd1: 'Chaque problème a besoin d\'un analyse précis pour trouver une solution specifique et toujours bien calculée...',
        patd2: 'MVC, Prototype, Singleton, BLoC, SOA',
        conoc: 'Connaissances de base en...'
    }
};

if (window.location.hash) {
    if (window.location.hash == '#fr') {
        subheading.textContent = language.fr.subheading;
        im.textContent = language.fr.im;
        aboutme.textContent = language.fr.aboutme;
        aboutmetext.textContent = language.fr.aboutmetext;
        aboutmetexttwo.textContent = language.fr.aboutmetexttwo;
        name.textContent = language.fr.namee;
        date.textContent = language.fr.date;
        addresss.textContent = language.fr.addresss;
        phone.textContent = language.fr.phone;
        language.textContent = language.fr.language;
        languagetwo.textContent = language.fr.languagetwo;
        cv.textContent = language.fr.cv;
        checkout.textContent = language.fr.checkout;
        mygit.textContent = language.fr.mygit;
        date.textContent = language.fr.date;
        addresss.textContent = language.fr.addresss;
        phone.textContent = language.fr.phone;
        language.textContent = language.fr.language;
        mes.textContent = language.fr.mes;
        languagetwo.textContent = language.fr.languagetwo;
        cv.textContent = language.fr.cv;
        checkout.textContent = language.fr.checkout;
        mygit.textContent = language.fr.mygit;
        education.textContent = language.fr.education;
        experience.textContent = language.fr.experience;
        skills.textContent = language.fr.skills;
        ed1.textContent = language.fr.ed1;
        ede1.textContent = language.fr.ede1;
        ed2.textContent = language.fr.ed2;
        ede2.textContent = language.fr.ede2;
        ede3.textContent = language.fr.ede3;
        ede3a.textContent = language.fr.ede3a;
        exp1h.textContent = language.fr.exp1h;
        exp1t.textContent = language.fr.exp1t;
        exp1t2.textContent = language.fr.exp1t2;
        exp2h.textContent = language.fr.exp2h;
        exp2t.textContent = language.fr.exp2t;
        exp2t2.textContent = language.fr.exp2t2;
        exp3h.textContent = language.fr.exp3h;
        exp3t.textContent = language.fr.exp3t;
        exp3t3.textContent = language.fr.exp3t3;
        habpro.textContent = language.fr.habpro;
        javd.textContent = language.fr.javd;
        nojd.textContent = language.fr.nojd;
        mysqld.textContent = language.fr.mysqld;
        flutterd.textContent = language.fr.flutterd;
        scrum.textContent = language.fr.scrum;
        scrumd.textContent = language.fr.scrumd;
        desingP.textContent = language.fr.desingP;
        patd1.textContent = language.fr.patd1;
        patd2.textContent = language.fr.patd2;
        conoc.textContent = language.fr.conoc;
    } else if (window.location.hash == '#eng') {
        subheading.textContent = language.eng.subheading;
        im.textContent = language.eng.im;
        aboutme.textContent = language.eng.aboutme;
        aboutmetext.textContent = language.eng.aboutmetext;
        aboutmetexttwo.textContent = language.eng.aboutmetexttwo;
        name.textContent = language.eng.namee;
        date.textContent = language.eng.date;
        addresss.textContent = language.eng.addresss;
        phone.textContent = language.eng.phone;
        language.textContent = language.eng.language;
        languagetwo.textContent = language.eng.languagetwo;
        cv.textContent = language.eng.cv;
        checkout.textContent = language.eng.checkout;
        mygit.textContent = language.eng.mygit;
        date.textContent = language.eng.date;
        addresss.textContent = language.eng.addresss;
        phone.textContent = language.eng.phone;
        language.textContent = language.eng.language;
        mes.textContent = language.eng.mes;
        languagetwo.textContent = language.eng.languagetwo;
        cv.textContent = language.eng.cv;
        checkout.textContent = language.eng.checkout;
        mygit.textContent = language.eng.mygit;
        education.textContent = language.eng.education;
        experience.textContent = language.eng.experience;
        skills.textContent = language.eng.skills;
        ed1.textContent = language.eng.ed1;
        ede1.textContent = language.eng.ede1;
        ed2.textContent = language.eng.ed2;
        ede2.textContent = language.eng.ede2;
        ede3.textContent = language.eng.ede3;
        ede3a.textContent = language.eng.ede3a;
        exp1h.textContent = language.eng.exp1h;
        exp1t.textContent = language.eng.exp1t;
        exp1t2.textContent = language.eng.exp1t2;
        exp2h.textContent = language.eng.exp2h;
        exp2t.textContent = language.eng.exp2t;
        exp2t2.textContent = language.eng.exp2t2;
        exp3h.textContent = language.eng.exp3h;
        exp3t.textContent = language.eng.exp3t;
        exp3t3.textContent = language.eng.exp3t3;
        habpro.textContent = language.eng.habpro;
        javd.textContent = language.eng.javd;
        nojd.textContent = language.eng.nojd;
        mysqld.textContent = language.eng.mysqld;
        flutterd.textContent = language.eng.flutterd;
        scrum.textContent = language.eng.scrum;
        scrumd.textContent = language.eng.scrumd;
        desingP.textContent = language.eng.desingP;
        patd1.textContent = language.eng.patd1;
        patd2.textContent = language.eng.patd2;
        conoc.textContent = language.eng.conoc;
    }
}