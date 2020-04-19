import React from "react";
import {
  Heading,
  Text,
  Table,
  TableHeader,
  TableRow,
  TableCell,
  Anchor,
  TableBody,
  Box,
  Paragraph,
} from "grommet";

const Ul = ({ children }) => <ul>{children}</ul>;

const ListItem = ({ children, ...rest }) => (
  <Text as="li" {...rest}>
    {children}
  </Text>
);

const Bold = ({ children, ...otherProps }) => (
  <Text weight="bold" {...otherProps}>
    {children}
  </Text>
);

export default function MethodPage() {
  return (
    <Box>
      <Heading level={1} size="large" color="accent-4">
        Notre Méthodologie
      </Heading>
      <Heading level={3}>1- LE CHOIX DES TEXTES ET DES AMENDEMENTS</Heading>
      <Heading level={4}>a- le choix des textes</Heading>
      <Paragraph fill>
        Une sélection de textes en matière de pêche — adoptés par le Parlement
        européen — a été effectuée par l'équipe de BLOOM. Il ne s’agit ni d'une
        liste exhaustive ni d’un échantillon représentatif (c'est-à-dire
        aléatoire) de tous les textes adoptés autour de la pêche pendant cette
        législature, mais plutôt des textes qui nous semblent être les plus
        importants du point de vue de leur impact sur les écosystèmes marins et
        les pêcheurs. En outre, cette sélection porte principalement sur les
        textes adoptés depuis 2017, pour une raison d'accessibilité des données
        (nous n'avons pas trouvé toutes les données nécessaires pour couvrir
        toute la législature).
      </Paragraph>
      <Heading level={4}>b- le choix des amendements</Heading>
      <Paragraph fill>
        Un certain nombre d'amendements a ensuite été sélectionné au sein de
        chacun des textes choisis ci-dessus, selon deux critères cumulatifs :
      </Paragraph>
      <Ul>
        <ListItem>
          Les amendements dont le détail des votes était disponible
        </ListItem>
        <ListItem>
          Les amendements pour lesquels les ONG ont émis des recommandations de
          vote
        </ListItem>
      </Ul>
      <Paragraph fill>
        Ces deux critères nous ont permis de nous assurer que les amendements
        choisis étaient décisifs, car seuls les amendements ayant une certaine
        importance sont votés par "appel nominal", c'est-à-dire qu'un groupe de
        députés demande la publication du détail du vote. Par ailleurs, le
        deuxième critère nous a également permis de nous assurer que les députés
        ne pouvaient ignorer, par le biais des recommandations transmises par
        les ONG, quel vote allait protéger l'océan et quel vote allait le
        détruire.
      </Paragraph>
      <Paragraph fill>
        Ici encore, cette sélection d'amendements ne doit pas être regardée
        comme exhaustive ou représentative, mais bien comme une sélection
        restreinte selon 1) les critères décrits ci-dessus et 2) la vision et la
        mission de BLOOM.
      </Paragraph>
      <Paragraph fill>
        <Bold>NB : </Bold>cette méthodologie n'a pas pu être appliquée in
        extenso sur trois textes :
      </Paragraph>
      <Ul>
        <ListItem>
          Le Règlement Mesures Techniques : des recommandations existaient pour
          tous les amendements demandés en vote par appel nominal. Ainsi, nous
          avons sélectionné les amendements pour lesquels les ONG avaient
          particulièrement insisté en indiquant un double "+" (voter absolument
          pour) ou un double "-" (voter contre absolument).
        </ListItem>
        <ListItem>
          Le Fonds européen pour les Affaires Maritimes et la Pêche : tout comme
          pour le Règlement Mesures Techniques, des recommandations existaient
          pour tous les amendements demandés en vote par appel nominal et
          beaucoup d'entre eux étaient "doublement marqués". Une sélection a
          donc été opérée par l'équipe de BLOOM pour ne prendre en compte que
          ceux qui nous semblaient les plus importants, parmi ceux déjà
          doublement marqués.`, `L'accord Japon-Union européenne : seuls les
          amendements 16 et 39 sur le thon rouge et la chasse à la baleine ont
          été sélectionnés. Très peu d'autres amendements traitaient des
          problématiques de pêche.
        </ListItem>
      </Ul>
      <Paragraph fill>
        Enfin, seuls quelques "votes finaux", c'est-à-dire ceux portant sur le
        texte entier et dans sa version définitive ont été pris en
        considération. En effet, ces textes finaux contiennent beaucoup de
        dispositions différentes, donc lorsque l'opinion des ONG étaient
        partagée quant à leur contenu, nous n'avons pas inclus ces votes dans
        notre classement.
      </Paragraph>
      <Heading level={3}>2- LE CALCUL DE LA NOTE </Heading>
      <Heading level={4}>a- le barème</Heading>
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell scope="col" border="bottom">
              Les différents types de votes
            </TableCell>
            <TableCell size="1/4" scope="col" align="right" border="bottom">
              Points
            </TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell scope="row">
              <Bold>Vote protecteur : </Bold>En accord avec les recommandations
              des ONG pour la protection de l'océan (exemples : Greenpeace, Seas
              at Risk et Oceana).
            </TableCell>
            <TableCell align="right" scope="row">
              <Bold>3</Bold>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell scope="row">
              <Bold>Vote destructeur : </Bold>Allant à l’encontre des
              recommandations des ONG.
            </TableCell>
            <TableCell align="right" scope="row">
              <Bold>0</Bold>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell scope="row">
              <Bold>Abstention : </Bold>Le député s'est abstenu. Il a donc voté
              mais ne s'est prononcé ni en faveur, ni en défaveur de l'objet du
              vote.
            </TableCell>
            <TableCell align="right" scope="row">
              <Bold>1</Bold>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell scope="row">
              <Bold>Absence : </Bold>Le député n'a voté pour aucun amendement ou
              texte tout le long de la séance de vote. Nous avons donc considéré
              qu'une absence était "plus mauvaise" (car la présence est
              obligatoire) qu'une abstention ("neutre" car n'influence pas
              l'adoption ou non d'un amendement/texte), mais meilleure qu'un
              vote destructeur.
            </TableCell>
            <TableCell align="right" scope="row">
              <Bold>0.5</Bold>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell scope="row">
              <Bold>Présent mais n'a pas voté : </Bold>
              le député n'a pas voté pour l'amendement que nous avons
              sélectionné. En revanche, il a voté pour d'autres amendements ou
              textes au sein de la même séance de vote. Il était donc présent
              mais pour une raison inconnue il n'a pas voté pour cet amendement
              en particulier. La note est la même que pour une absence.
            </TableCell>
            <TableCell align="right" scope="row">
              <Bold>0.5</Bold>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Paragraph fill>
        <Bold>NB 1 : </Bold>La note la plus basse de ce barème est l’attribution
        de 0 point aux votes "destructeurs" (pour voir à quoi peuvent ressembler
        des recommandations de vote :&nbsp;
        <Anchor
          target="_blank"
          href="https://seas-at-risk.org/images/pdf/publications/2018-01-15TechnicalMeasuresPlenaryvote-NGOvotingRecommendationFinal.pdf"
          color="accent-1"
          label="cliquez ici"
        />
        ). Notre échelle s'étale de 0 à 3 et comprend un écart plus grand entre
        "abstention" et "vote protecteur" (1 -> 3) qu'entre "abstention" et
        "vote destructeur" (1 -> 0) car nous avons voulu valoriser les votes
        protecteurs et leur avons donc alloué un poids supérieur.
      </Paragraph>
      <Paragraph fill>
        <Bold>NB 2 : </Bold>les corrections d'intention de vote ont été prises
        en considération car - même si ces dernières ne modifient pas le vote
        final - les corrections sont rares et relèvent donc vraisemblablement
        plus de l'erreur que d'une véritable stratégie. En outre, au regard de
        la méthode de vote - très rapide - il est compréhensible que des erreurs
        surviennent.
      </Paragraph>
      <Heading level={4}>
        b- la méthode de calcul : une moyenne pondérée
      </Heading>
      <Paragraph fill>
        À partir des notations portant sur chaque vote, nous avons calculé une
        moyenne pondérée, c'est-à-dire que chaque règlement a reçu le même poids
        dans la note finale, quel que soit le nombre d'amendements considérés.
      </Paragraph>
      <Paragraph fill>
        Pour cela, les points de chaque député ont été additionnés pour chaque
        règlement, puis le total a été divisé par le maximum de points possible
        par règlement. Par exemple, pour le Règlement Mesures Techniques, six
        votes ont été pris en compte, le total par député pour le Règlement
        Mesures Techniques a donc été divisé par 18 (6 votes x 3 points pour
        chaque vote "protecteur"). Dans le cas de Michèle Alliot-Marie, qui a eu
        deux votes protecteurs et quatre votes destructeurs au sein de ce
        règlement, sa note est donc de : <Bold>(2x3 + 4x0)/18 = 0,3</Bold>
      </Paragraph>
      <Paragraph fill>
        Les notes de chaque règlement ont ensuite été additionnées pour chaque
        député et calibrées sur <Bold>20 points</Bold>, comme à l'école.{" "}
      </Paragraph>
      <Paragraph fill>
        <Bold>NB : </Bold>Cette règle a été appliquée à tous les députés, à
        l’exception de ceux qui ont été inactifs pendant une période, qu'il
        s'agisse de ceux partis avant la fin de la législature ou de ceux qui
        les ont remplacés. Le nombre par lequel leur note totale est divisée
        varie donc en fonction du nombre de texte pour lesquels chaque député a
        pu voter. Par exemple, Louis Aliot a quitté sa fonction de député en
        juillet 2017 et, pour les textes que nous avons pris en compte, n'a été
        actif que pour deux d’entre eux. Ainsi sa note totale a été divisée par
        10 (=20/2) et les textes pour lesquels il n'a pas pu voter n'ont pas été
        comptabilisés dans sa moyenne. Il entre alors dans la catégorie des
        "inactifs", qui regroupe les députés ayant quitté leurs fonctions et
        n'ayant donc pas une moyenne représentative car trop peu de votes ont pu
        être pris en compte.
      </Paragraph>
      <Heading level={4}>c- le code couleur</Heading>
      <Paragraph fill>
        Un code couleur a finalement été attribué à chaque député :
      </Paragraph>
      <Ul>
        <ListItem>
          <Bold color="protect">VERT</Bold> pour les députés ayant une note
          allant de 14/20 à 20/20 : + de 70% de leurs votes sont PROTECTEURS de
          l'océan.
        </ListItem>
        <ListItem>
          <Bold color="medium">ORANGE </Bold> pour les députés ayant une note
          allant de 10/20 à 14/20 : entre 50% et 70% de leurs votes sont
          PROTECTEURS de l'océan
        </ListItem>
        <ListItem>
          <Bold color="destruct">ROUGE </Bold> pour les députés ayant une note
          allant de 0/20 à 10/20 : - de 50% de leurs votes sont PROTECTEURS de
          l'océan
        </ListItem>
      </Ul>
      <Heading level={3}>3- LES SOURCES</Heading>
      <Paragraph fill>
        Tous les textes, amendements et votes, ont été collectés sur le site du{" "}
        <Anchor
          target="_blank"
          href="http://www.europarl.europa.eu/portal/fr"
          color="accent-1"
          label="Parlement européen"
        />
        . Les recommandations de vote sont celles des différentes coalitions
        d'ONG de protection de l'océan (par exemple Greenpeace, Seas at Risk et
        Oceana) travaillant sur les textes sélectionnés.
      </Paragraph>
      <Paragraph fill>
        Pour toute demande supplémentaire, envoyer un mail à l'adresse suivante
        : contact@bloomassociation.org
      </Paragraph>
    </Box>
  );
}
