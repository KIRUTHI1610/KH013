@startuml
package "Joulswap App" {
    [React Frontend] as FE
    [Node.js Backend] as BE
    [Prosumer] as Pro
    [Consumer] as Con
    [Investor] as Inv
    [Razorpay Payment Gateway] as RG
    [Blockchain] as BC

    FE --> BE : Send request
    BE --> FE : Send response
    Pro --> BE : Login
    Con --> BE : Login
    Inv --> BE : Login
    BE --> Pro : Dashboard with Prosumer ID
    BE --> Con : Dashboard with Consumer ID
    BE --> Inv : Dashboard with Investor ID
    Pro --> RG : Payment transaction
    Con --> RG : Payment transaction
    Inv --> RG : Payment transaction
    RG --> BC : Secure transaction
}
@enduml