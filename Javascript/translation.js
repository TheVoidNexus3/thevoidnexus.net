const translations = {
    "en": {
        "balance": "Balance",
        "second": "Money per Second",
        "click": "Per click",
        "earn_money": "Earn Money",
        "total_clicks": "Total clicks",
        "money_per_second": "Money per Second",
        "cost": "Cost",
        "money_per_click": "Money per Click",
        "playtime": "Playtime",
        "reset": "Reset Progress",
        "database": "Database",
        "calculator": "Calculator",
        "signOut": "Sign out",
        "export": "Save Data",
        "import": "Fetch Data",
        "username": "Logged in as <strong>",
        "english": "English",
        "german": "German",
        "swedish": "Swedish",
        "logged_in": "You are logged in as <strong>",
        "error": "An error occured.",
        "exportConfirm": "This action will override the stats saved in the database. Do you want to continue?",
        "importConfirm": "This action will override your current stats. Do you want to continue?",
        "cancelled": "Operation cancelled.",
        "imported": "Data successfully loaded from the database.",
        "exported": "Data successfully saved in the database.",
        "empty": "No data found in the database.",
        "logged_out": "Successfully logged out.",
        "not_logged_in": "You are not logged in.",
        "not_authenticated": "You are not authenticated.",
        "login": "Login",
        "title": "VoidClicker by TheVoidNexus",
        "popupText": "Do you really want to reset your progress?",
        "cancel": "Cancel",
        "confirm": "Confirm",
    },
    "de": {
        "balance": "Kontostand",
        "second": "Geld pro Sekunde",
        "click": "Pro Klick",
        "earn_money": "Verdiene Geld",
        "total_clicks": "Klicks insgesamt",
        "money_per_second": "Geld pro Sekunde",
        "cost": "Preis",
        "money_per_click": "Geld pro Klick",
        "playtime": "Spielzeit",
        "reset": "Fortschritt zurücksetzen",
        "database": "Datenbasis",
        "calculator": "Rechner",
        "signOut": "Ausloggen",
        "export": "Daten speichern",
        "import": "Daten abrufen",
        "username": "Eingeloggt als <strong>",
        "english": "Englisch",
        "german": "Deutsch",
        "swedish": "Schwedisch",
        "logged_in": "Du bist eingeloggt als <strong>",
        "error": "Ein Fehler ist aufgetreten.",
        "exportConfirm": "Diese Aktion wird den in der Datenbasis gespeicherten Fortschritt überschreiben. Möchtest du fortfahren?",
        "importConfirm": "Diese Aktion wird deinen aktuellen Fortschritt überschreiben. Möchtest du fortfahren?",
        "cancelled": "Aktion abgebrochen.",
        "imported": "Daten erfolgreich von der Datenbasis geladen.",
        "exported": "Daten erfolgreich auf der Datenbasis gespeichert.",
        "empty": "Es wurden keine Daten in der Datenbasis gefunden.",
        "logged_out": "Erfolgreich ausgeloggt.",
        "not_logged_in": "Du bist nicht eingeloggt.",
        "not_authenticated": "Du bist nicht authentifiziert.",
        "login": "Einloggen",
        "title": "VoidClicker von TheVoidNexus",
        "popupText": "Möchtest du deinen Fortschritt wirklich zurücksetzen?",
        "cancel": "Abbrechen",
        "confirm": "Bestätigen",
    },
    "sv": {
        "balance": "Balans",
        "second": "Pengar per sekund",
        "click": "Per klick",
        "earn_money": "Tjäna pengar",
        "total_clicks": "Totalt antal klick",
        "money_per_second": "Pengar per sekund",
        "cost": "Kostnad",
        "money_per_click": "Pengar per klick",
        "playtime": "Speltid",
        "reset": "Återställ framsteg",
        "database": "Databas",
        "calculator": "Kalkylator",
        "signOut": "Logga ut",
        "export": "Spara data",
        "import": "Hämta data",
        "username": "Inloggad som <strong>",
        "english": "Engelska",
        "german": "Tyska",
        "swedish": "Svenska",
        "logged_in": "Du är inloggad som <strong>",
        "error": "Ett fel inträffade.",
        "exportConfirm": "Denna åtgärd kommer att åsidosätta statistiken som sparats i databasen. Vill du fortsätta?",
        "importConfirm": "Denna åtgärd kommer att åsidosätta din nuvarande statistik. Vill du fortsätta?",
        "cancelled": "Åtgärden avbröts.",
        "imported": "Data framgångsrikt laddad från databasen.",
        "exported": "Data framgångsrikt sparas i databasen.",
        "empty": "Inga data hittades i databasen.",
        "logged_out": "Utloggning lyckades.",
        "not_logged_in": "Du är inte inloggad.",
        "not_authenticated": "Du är inte autentiserad.",
        "login": "Logga in",
        "title": "VoidClicker av TheVoidNexus",
        "popupText": "Vill du verkligen återställa dina framsteg?",
        "cancel": "Avbryt",
        "confirm": "Bekräfta",
    }
};

function setLanguage(lang) {
    language = lang;
    localStorage.setItem("PreferredLanguage", language);
    update();

    const reset = document.getElementById("reset");
    const database = document.getElementById("database");
    const calculator = document.getElementById("calculator")
    const signOut = document.getElementById("signout")
    const exportT = document.getElementById("export")
    const importT = document.getElementById("import")
    const login = document.getElementById("login");
    const popupText = document.getElementById("PopupText");
    const cancel = document.getElementById("cancel");
    const confirm = document.getElementById("confirm");

    reset.innerHTML = translations[language].reset;
    database.innerHTML = translations[language].database
    calculator.innerHTML = translations[language].calculator
    signOut.innerHTML = translations[language].signOut
    exportT.innerHTML = translations[language].export
    importT.innerHTML = translations[language].import
    login.innerHTML = translations[language].login
    popupText.innerHTML = translations[language].popupText
    cancel.innerHTML = translations[language].cancel
    confirm.innerHTML = translations[language].confirm

    const select = document.getElementById('language-select');
    select.options[0].innerHTML = translations[language].english
    select.options[1].innerHTML = translations[language].german
    select.options[2].innerHTML = translations[language].swedish

    if(language == "de") {
        select.options[1].selected = true;
    }

    if(language == "sv") {
        select.options[2].selected = true;
    }

    document.title = translations[language].title
}

setLanguage(language)