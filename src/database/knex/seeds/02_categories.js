exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('categories').del()
    .then(function () {
      // Inserts seed entries
      return knex('categories').insert([
        {
          id: 1,
          name: 'Refeição',
        },
        {
          id: 2,
          name: 'Sobremesa',
        },
        {
          id: 3,
          name: 'Bebida',
        }
      ]);
    });
};
