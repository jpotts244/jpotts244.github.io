---
layout: post
title:  "Adventures with Git History and File Tree Structure"
date:   2019-02-20 20:25:10 -0400
categories: jekyll update
image: https://imgs.xkcd.com/comics/git_commit.png
headerImage: true
tag:
- git workflows
- git
- git history
category: blog
author: jacquelinepotts
description: Using git history and project structure to take over the world
---

Git! It's everyone's favorite version control system and rightfully so, it is a pretty
powerful tool. Sometimes git can be a little boring and not present the easiest format of data for us creative human-types to understand.
We will be exploring some tools to jazz up your source control to lean some cool data about
your favorite code bases and developers of the past and present.

## File Tree Structure and Architecture
Looking at a codebase in your favorite editor might give us a good understanding of the file structure but not much else. It would be great to get a deeper look into the not-so-obvious
dependencies _between_ classes, files, and even directories, the real meat and veg of the operation. One data visualization tool that could help us our here is [**Code Flower**](http://www.redotheweb.com/CodeFlower/)
  <br>
  <br>
  <div class="toright">
    <img class="image" src="../assets/images/code-flower.png" alt="Alt Text">
      <figcaption class="caption">File tree visualization of a Ruby on Rails API</figcaption>
  </div>
  <br>

We can see links and dependencies between files and directories as depicted by the gray lines.
The more gray lines a file blob has, the more relationships it has to other areas of the codebase.
By hovering over the circles, we can see the file names too and lines of code (`loc`) count. Note the example of everyone's favorite `schema.rb` file above.

Another cool feature of this tool is we get a beautiful display of file _sizes_. Libraries and external packages are expectedly larger but internal files that are out of proportion with their
neighboring file friends might be good candidates for a revisit and refactor.

Visit the source code to get some drop dead gorgeous flowers of your favorite projects here:
[Code Flower](https://github.com/fzaninotto/CodeFlower)

## Git and Developer History
**Getting a better understanding of the who, what, where, and why of a codebase.**
Let's take `git blame` to a whole new level with a neat little tool called [Gource](https://gource.io/), an animated source control visualization tool.


<iframe width="560" height="315" src="https://www.youtube.com/embed/NjUuAuBcoqs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Here we get an actual video of the history of the commits and commit authors who contributed to the project with some fun facts like when the code was written, what areas of the codebase the developer worked on, and the magnitude of their ownership.

A tool like Gource is especially helpful getting a high level and quick introduction to a new code base and the developers you're about to work with.
