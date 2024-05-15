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
    reset.innerHTML = translations[language].reset;
    database.innerHTML = translations[language].database
    calculator.innerHTML = translations[language].calculator
    signOut.innerHTML = translations[language].signOut
    exportT.innerHTML = translations[language].export
    importT.innerHTML = translations[language].import
    login.innerHTML = translations[language].login

    const select = document.getElementById('language-select');
    select.options[0].innerHTML = translations[language].english
    select.options[1].innerHTML = translations[language].german

    if(language == "de") {
        select.options[1].selected = true;
    }

    document.title = translations[language].title
}

setLanguage(language)