# Cours

## Processus d'inscription

Le processus d'inscription d'un utilisateur à un cours dépend du **niveau de visibilité** de ce dernier. Il y a trois niveaux de visibilité possibles, résumés dans le tableau suivant :

| Visiblité | Description |
| --- | --- |
| Public | Tout utilisateur avec le rôle étudiant peut s'inscrire |
| Sur invitation uniquement | Tout utilisateur peut demander à être inscrit |
| Privé | Aucun utilisateur ne peut s'inscrire de lui-même |

### Cours public

Dans le cas d'un cours **public**, l'utilisateur peut directement s'inscrire de lui-même au cours pour autant qu'il possède le rôle d'étudiant. Si ce n'est pas le cas, il ne pourra pas s'y inscrire. Le schéma suivant résume ce processus :

``` mermaid
graph LR
    A(Pas inscrit <br> au cours) -- "Inscription <br> (par l'étudiant)" --> B(Inscrit <br> au cours)
```

### Cours sur invitation

Dans le cas d'un cours avec inscription **sur invitation uniquement**, l'utilisateur doit d'abord envoyer une demande d'invitation pour le cours en question. Le coordinateur du cours recevra cette demande et devra décider s'il l'accepte ou s'il la refuse. Dans le premier cas, l'utilisateur sera, à partir de ce moment, inscrit au cours et, dans le second cas, il restera non-inscrit au cours. Le schéma suivant résume ce processus :

``` mermaid
graph LR
    A(Pas inscrit <br> au cours) -- "Envoi d'une <br> <b>demande</b> d'invitation <br> (par l'utilisateur)" --> B(Demande d'invitation <br> envoyée)
    B -- "Demande <b>acceptée</b> <br> (par le coordinateur)" --> C(Inscrit <br> au cours)
    B -- "Demande <b>refusée</b> <br> (par le coordinateur)" --> A
```

On notera qu'une fois la demande d'invitation acceptée par le coordinateur, l'utilisateur qui n'avait pas encore le rôle d'étudiant reçoit automatiquement ce rôle à ce moment.

### Cours privé

Dans le cas d'un cours **privé**, l'utilisateur doit d'abord avoir reçu une invitation pour le cours en question, de la part du coordinateur de ce dernier. L'utilisateur devra décider s'il l'accepte ou s'il la refuse. Dans le premier cas, l'utilisateur sera, à partir de ce moment, inscrit au cours et, dans le second cas, il restera non-inscrit au cours. Le schéma suivant résume ce processus :

``` mermaid
graph LR
    A(Pas inscrit <br> au cours) -- "Réception d'une <br> <b>invitation</b> <br> (du coordinateur)" --> B(Invitation <br> envoyée)
    B -- "Invitation <b>acceptée</b> <br> (par l'utilisateur)" --> C(Inscrit <br> au cours)
    B -- "Invitation <b>refusée</b> <br> (par l'utilisateur)" --> A
```

On notera que si la personne invitée n'a pas encore de compte sur TLCA, elle recevra un e-mail l'invitant à s'en créer un. Elle pourra ensuite accéder à l'invitation et décider de l'accepter ou de la refuser.

## Progression

TODO...
