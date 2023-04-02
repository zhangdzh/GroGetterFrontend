const port = process.env.PORT || 3000;

//connecting to api platform using heroku
app.listen(port, () => {
  console.warn(`App listening on http://localhost:${PORT}`);
});
