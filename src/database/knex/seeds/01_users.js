exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
  .then(function () {
    // Inserts seed entries
    return knex('users').insert(
      {
        id: 1,
		    name: 'Admin',
        email: 'admin@admin.com',
        password: '123456',
		    is_admin: true,
      }
    );
  });
};
