---
layout: post
title:  "Django ORM for the Rails Developer Part 2"
date:   2019-11-16 11:07:10 -0400
categories: jekyll update
image: /assets/images/django-the-cat.png
headerImage: true
tag:
- Django ORM
- Querying in a Django Project
- Rails
- Django
category: blog
author: jacquelinepotts
---

Hello and welcome back! On today's exciting edition of Django ORM for the Rails Developer, we will be taking a peek at some more complex and snazzy querying, topics include: querying using comparison evaluators, querying for objects created within a certain time period, using straight up SQL in the ORMs, and more!


Let's get crackin' and jump back into our blog

---
# Using Comparators to Query for our Most Popular and Least Popular Posts

Remember our `Post` model from the previous Django ORM post? Let's bring that puppy back here and let's add a new attribute, `likes`, and for now, let's say `likes` is an integer. A user that comes to our blog and reads a post can `like` said post if they enjoyed it, kind of like a +1.

First step, let's grab our most popular posts from the database; give us all the posts that have at least 5 likes.
<br>
<br>


## Rails - ActiveRecord
```irb
irb(main):001:0> Post.where("likes >= ?", 5)

Post Load (1.1ms)  SELECT  "posts".* FROM "posts" WHERE (id >= 5)
=> <ActiveRecord::Relation [<Post id: "3a260dc9-db70-4741-817b-7a69f465624f", author: "hello there", likes: 5, created_at: "2018-07-31 01:28:41", updated_at: "2018-07-31 01:30:23">]>
```


In English this translates to: 'give me all the posts that have a value of `like` that is greater than or equal to 5'.

`where` can take multiple different formats of conditions and here we are using a SQL string.
<br>
<br>

## Wait a minute
Wait a minute, but what is this `'?'` thing doing in our SQL string? The `?` is called a placeholder and we use it as a means of protection against SQL injections. Since `where` can evaluate SQL, someone could _inject_ some harmful SQL in this function that our database could execute.

For example a malicious person could inject something like
```ruby
Post.where("likes >= 5; DROP TABLE Users")
```
into our system. The placeholder allows us to protect against SQL we are not expecting.

<br>
When in doubt, when using `where` with SQL strings use a placeholder!
<br>
Thats great, now if we wanted to only get `posts` that had more than 5 likes we could edit our above query pretty easily.

```irb
irb(main):001:0> Post.where("likes > ?", 5)

Post Load (1.1ms)  SELECT  "posts".* FROM "posts" WHERE (id > 5) LIMIT $1  [["LIMIT", 11]]
=> <ActiveRecord::Relation [<Post id: "3a260dc9-db70-4741-817b-7a69f465624f", author: "hello there", likes: 6, created_at: "2018-07-31 01:28:41", updated_at: "2018-07-31 01:30:23">]>
```


Boom!

<br>
## Django ORM
Let's try and do the same thing in Django; Gimme all posts who have at least 5 likes.

```python
In [1]: from posts.models import Post

In [2]: Post.objects.filter(likes__gte=5)
Out[2]: <QuerySet [<Post: author: bloggin_4_life, created: 2018-11-28 14:32:19.956328+00:00, likes: 5>]>
```

Here, our `filter` friend is back and very similar to the above `where` method, _filter_ for all objects that meet this criteria.

We pass in our interested attribute (`likes`) and can use Django's double underscore syntax to evaluate some fun stuff (we will explore this more later), but for here `__gte` translates to `greater than equal to`. We also have `__gt` which translates to `greater than`

Give me all the posts who have greater than 5 likes
```python
In [1]: from posts.models import Post

In [2]: Post.objects.filter(likes__gt=5)
Out[2]: <QuerySet [<Post: author: bloggin_4_life, created: 2018-11-28 14:32:19.956328+00:00, likes: 7>]>
```
<br>
Easy Peasy 💻
<br>
<br>


---

## Rails - ActiveRecord
If we wanted to turn this around and get our least popular blog posts how do you think we would go about doing that?


```irb
irb(main):001:0> Post.where("likes <= ?", 5)

Post Load (1.1ms)  SELECT  "posts".* FROM "posts" WHERE (id <= 5)
=> <ActiveRecord::Relation [<Post id: "3a260dc9-db70-4741-817b-7a69f465624f", author: "hello there", likes: 4, created_at: "2018-07-31 01:28:41", updated_at: "2018-07-31 01:30:23">]>
```

Which will generate the following SQL
```sql
SELECT `posts`.* FROM `posts`  WHERE (`posts`.`id` <= 5)
```
Give us all the posts that have 5 or less likes.

<br>
If we wanted to get exclusively less than 5 we will do just as we did above to modify the comparator by removing the `=` from the query.

```irb
irb(main):001:0> Post.where("likes < ?", 5)

Post Load (1.1ms)  SELECT  "posts".* FROM "posts" WHERE (id < 5)
=> <ActiveRecord::Relation [<Post id: "3a260dc9-db70-4741-817b-7a69f465624f", author: "hello there", likes: 4, created_at: "2018-07-31 01:28:41", updated_at: "2018-07-31 01:30:23">]>
```
```sql
SELECT `posts`.* FROM `posts`  WHERE (`posts`.`id` < 5)
```

---

## Did you know?
Its time for a **did you know?** break!

Rails gives us the raw SQL used to execute our queries by default. Django does not give us this information by default, we will need to ask Django nicely to show us the raw SQL that will be executed by our query using the `query` function.

Note this function will only work on a Django QuerySet object.

<br>
**Output of a Regular old Django Query**
```python
In [1]: from posts.models import Post
In [2]: Post.objects.filter(likes__gte=5)

Out[2]: <QuerySet [<Post: author: bloggin_4_life, created: 2018-11-28 14:32:19.956328+00:00, updated: 2018-11-30 19:23:19.956328+00:00, likes: 7>]>
```
<br>

**Print the output of `query` function on a Regular old Django QuerySet**
```python
In [1]: from posts.models import Post
In [2]: popular_posts = Post.objects.filter(likes__gte=5)
In [3]: print(popular_posts.query)

Out[2]: SELECT post.id, post.created, post.updated, post.author, post.likes FROM post WHERE post.likes >= 5
```
<br>
<br>
Alright, now get out there and write some queries!
