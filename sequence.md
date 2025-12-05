``` mermaid 
sequenceDiagram 

%% List all participants/modules
Participant main
Participant Guests
Participant ParkAreas
Participant Services
Participant database

%% imports happen first 
main->>Guests: I need the function for generating HTML for Guests
Guests-->>main: Sure! Here you go.
main->>ParkAreas: I need the function for generating HTML for ParkAreas
ParkAreas-->>main: Sure! Here you go.
main->>Services: I need the function for generating HTML for Services
Services-->>main: Sure! Here you go.
Note right of main: Invoke Guests function
Guests-->>Database: I need all the Guests objects
Database-->>Guests: Here's a copy of them

loop
Guests->>Guests: Convert each object to an `<li>`
end
Guests-->>main: Here's all the generated HTML
Note right of main: Invoke ParkAreas function
ParkAreas-->>Database: I need all the ParkAreas objects
Database-->>ParkAreas: Here's a copy of them
loop
ParkAreas->>ParkAreas: Convert each object to an `<li>`
end
ParkAreas-->>main: Here's all the generated HTML
Note right of main: Invoke Services function
Services-->>Database: I need all the Services objects
Database-->>Services: Here's a copy of them
loop
Services->>Services: Convert each object to an `<li>`
end
Services-->>main: Here's all the generated HTML

Note right of main: Update the innerHTML of the <main> element in the DOM.
```