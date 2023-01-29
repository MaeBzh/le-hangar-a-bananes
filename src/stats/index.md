---
layout: doc
aside: true
---

# Statistiques

<br/>
    <tabs
      :tabs="['Dépenses projet', 'Tab 2', 'Tab 3', 'Tab 4']"
    >
      <template v-slot:tab-1>
        <Bar title="Dépenses"
        :labels="[
          'Terrassement',
          'Fondations',
          'Dallage BA',
          'Ossature bois',
          'Contreventement',
          'Toiture',
          'Menuiseries',
          'Bardage'
        ]"
        :datasets="[
          {
            label: '€',
            data: [1350, 3200, 0, 0, 0, 0, 0, 0, 0],
            backgroundColor: '#3496b3',
            borderColor: '#3496b3',
            borderWidth: 1
          }
        ]"
        />
      </template>
      <template v-slot:tab-2> Content 2 </template>
      <template v-slot:tab-3> Content 3 </template>
      <template v-slot:tab-4> Content 4 </template>
    </tabs>
