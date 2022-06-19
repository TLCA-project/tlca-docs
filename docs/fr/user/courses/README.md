# Cours

## Processus d'inscription

Le processus d'inscription d'un étudiant à un cours dépend du **niveau de visibilité** de ce dernier. Il y a trois niveaux de visibilité possibles, résumés dans le tableau suivant :

| Visiblité | Description |
| --- | --- |
| Public | Tout utilisateur avec le rôle étudiant peut s'inscrire |
| Sur invitation uniquement | Tout utilisateur peut demander à être inscrit |
| Privé | Aucun utilisateur ne peut s'inscrire de lui-même |

### Cours public

Dans le cas d'un cours **public**...

### Cours sur invitation

Dans le cas d'un cours avec inscription **sur invitation uniquement**, l'utilisateur doit d'abord envoyer une demande d'invitation pour le cours en question. Le coordinateur recevra cette demande et devra décider s'il l'accepte ou s'il la refuse. Dans le premier cas, l'utilisateur sera, à partir de ce moment, inscrit au cours et, dans le second cas, il restera non-inscrit au cours. Le schéma suivant résume ce processus :

``` mermaid
graph LR
    A(Pas inscrit <br> au cours) -- Envoi d'une <br> <b>demande</b> d'invitation <br> par l'utilisateur --> B(Demande d'invitation <br> envoyée)
    B -- Demande <b>acceptée</b> <br> par le coordinateur --> C(Inscrit <br> au cours)
    B -- Demande <b>refusée</b> <br> par le coordinateur --> A
```

On notera qu'une fois la demande d'invitation acceptée par le coordinateur, l'utilisateur qui n'avait pas encore le rôle d'étudiant le reçoit automatiquement.

### Cours privé

Dans le cas d'un cours **privé**...
