export const templateSurveyQuestions = [

    {
        id: "Q1",
        text: "Êtes-vous arrivés en gare en voiture ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "OUI", next: "Q2" },
            { id: 2, text: "NON", next: "Q3" }
        ]
    },

    {
        id: "Q2",
        text: "Où êtes-vous garé ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Parking Relais Nord, Mantes la Jolie", next: "Q3" },
            { id: 2, text: "Parking Relais Sud, Mantes la Ville", next: "Q3" },
            { id: 3, text: "Espace public Nord, Mantes la Jolie", next: "Q3" },
            { id: 4, text: "Espace public Sud, Mantes la Ville", next: "Q3" }
        ]
    },

    {
        id: "Q3",
        text: "De quelle commune venez vous ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Mantes-la-Jolie", next: "Q3_RUE" },
            { id: 2, text: "Mantes-la-Ville", next: "Q3_RUE" },
            { id: 3, text: "Limay", next: "Q3_RUE" },
            { id: 4, text: "Magnanville", next: "Q3_RUE" },
            { id: 5, text: "Buchelay", next: "Q3_RUE" },
            { id: 6, text: "Autre commune", next: "Q3_AUTRE" }
        ]
    },

    {
        id: "Q3_RUE",
        text: "Dans quelle rue ou quartier ?",
        type: 'freeText',
        freeTextPlaceholder: "Saisir la rue ou le quartier",
        next: "Q4"
    },

    {
        id: "Q3_AUTRE",
        text: "De quelle commune venez vous ?",
        type: 'commune',
        next: "Q4"
    },

    {
        id: "Q4",
        text: "Ce lieu est-il .... ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Votre domicile", next: "Q5" },
            { id: 2, text: "Votre lieu de travail habituel", next: "Q5" },
            { id: 3, text: "Un lieu de rendez-vous professionnel", next: "Q5" },
            { id: 4, text: "Votre établissement scolaire", next: "Q5" },
            { id: 5, text: "Un lieu d'achats, courses, ...", next: "Q5" },
            { id: 6, text: "Un lieu de loisirs", next: "Q5" }
        ]
    },

    {
        id: "Q5",
        text: "Pour quelle raison vous stationnez vous autour de la gare ?",
        type: 'singleChoice',
        condition: "Q1 == 1",
        options: [
            { id: 1, text: "Prendre le train", next: "Q6" },
            { id: 2, text: "Prendre un bus", next: "Q6" },
            { id: 3, text: "Accompagner un voyageur", next: "Q6" },
            { id: 4, text: "Votre domicile", next: "Q6" },
            { id: 5, text: "Votre lieu de travail habituel", next: "Q6" },
            { id: 6, text: "Un lieu de rendez-vous professionnel", next: "Q6" },
            { id: 7, text: "Votre établissement scolaire", next: "Q6" },
            { id: 8, text: "Un lieu d'achats, courses, ...", next: "Q6" },
            { id: 9, text: "Un lieu de loisirs", next: "Q6" }
        ]
    },

    {
        id: "Q6",
        text: "Dans quelle commune allez vous ?",
        type: 'commune',
        next: "Q7"
    },

    {
        id: "Q7",
        text: "Ce lieu est-il .... ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Votre domicile", next: "Q8" },
            { id: 2, text: "Votre lieu de travail habituel", next: "Q8" },
            { id: 3, text: "Un lieu de rendez-vous professionnel", next: "Q8" },
            { id: 4, text: "Votre établissement scolaire", next: "Q8" },
            { id: 5, text: "Un lieu d'achats, courses, ...", next: "Q8" },
            { id: 6, text: "Un lieu de loisirs", next: "Q8" }
        ]
    },

    {
        id: "Q8",
        text: "Combien de temps resterez vous stationné ?",
        type: 'singleChoice',
        condition: "Q1 == 1",
        options: [
            { id: 1, text: "Moins de 2 heures", next: "Q9" },
            { id: 2, text: "De 2h à 4h", next: "Q9" },
            { id: 3, text: "De 4h à 6h", next: "Q9" },
            { id: 4, text: "Plus de 6h", next: "Q9" }
        ]
    },

    {
        id: "Q9",
        text: "A quelle fréquence faites-vous le trajet d'aujourd'hui ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "En semaine, entre 3 et 5 fois", next: "Q10" },
            { id: 2, text: "En semaine, moins de 3 fois", next: "Q10" },
            { id: 3, text: "Le week-end principalement", next: "Q10" },
            { id: 4, text: "Moins d'une fois par semaine", next: "Q10" },
            { id: 5, text: "Moins d'une fois par mois", next: "Q10" }
        ]
    },

    {
        id: "Q10",
        text: "Seriez-vous prêts à aller vous garer au sud de la gare pendant les travaux de ce parking (qui sera fermé), ou trouverez-vous d'autres solutions ?",
        type: 'singleChoice',
        condition: "Q1 == 1",
        options: [
            { id: 1, text: "OUI", next: "Q11" },
            { id: 2, text: "NON", next: "Q11" }
        ]
    },

    {
        id: "Q11",
        text: "Indépendamment des travaux, seriez-vous prêts à aller vous garer au sud de la gare ou trouverez-vous d'autres solutions ?",
        type: 'singleChoice',
        condition: "Q1 == 1",
        options: [
            { id: 1, text: "OUI", next: "end" },
            { id: 2, text: "NON", next: "end" }
        ]
    }
];
