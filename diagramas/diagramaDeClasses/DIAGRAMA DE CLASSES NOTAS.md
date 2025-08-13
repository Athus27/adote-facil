# Notas
> Fala fml, como falei na reunião no dc, vamo usar isso aqui pra fazer notas e atualizar os objetivos/o que a gente já fez. **Presta atenção**, começei um esboço aqui do diagrama de classes, pra fazer isso to usando o plantuml, que ele recomendou já na sala e até era citado no artigo lá, bom, ngç é o seguinte, segue anexo do código ae q gera o diagrama, pra vcs, fatiou passou, ñ tem erro ñ.

```uml
@startuml
title Diagrama de Classes - Adote Fácil (Final)

skinparam Shadowing false

class User {
  - id: String
  - name: String
  - email: String
  - password: String
  --
  + createUser()
  + login()
  + updateUser()
  + getAnimals()
  + getChats()
}

class Animal {
  - id: String
  - name: String
  - type: String
  - gender: String
  - status: AnimalStatus
  --
  + createAnimal()
  + getAvailable()
  + updateStatus()
}

class AnimalImage {
  - id: String
  - imageData: Bytes
}

class Chat {
  - id: String
  --
  + createChat()
  + getDetails()
}

class UserMessage {
  - id: String
  - content: String
  --
  + createMessage()
}

enum AnimalStatus {
  available
  adopted
  removed
}

' --- RELACAO---
User "1" *-- "0..*" Animal
Animal "1" *-- "0..*" AnimalImage
Animal ..> AnimalStatus
User "2" -- "1..*" Chat
Chat "1" *-- "0..*" UserMessage
User "1" -- "0..*" UserMessage
@enduml
```