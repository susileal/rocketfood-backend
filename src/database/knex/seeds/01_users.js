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
        password: '$2a$08$5Y44ISWZOdf0E.FF5Bbdqu2EjUJ7GzXdEKp3j1hKabSfXvaVE1jPO',
		    is_admin: true,
      }
    );
  });
};
