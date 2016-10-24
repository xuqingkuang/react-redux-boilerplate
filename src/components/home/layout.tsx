import * as React from 'react';
import { StatelessComponent } from 'react';
import Welcome from './welcome';

const HomeLayout: StatelessComponent<any> = (): any => {
  return (
    <div>
      <Welcome />
      <p>
        This automatic page generator is the easiest way to create beautiful
        pages for all of your projects. Author your page content here
        <a href="https://guides.github.com/features/mastering-markdown/">
          using GitHub Flavored Markdown
        </a>,
        select a template crafted by a designer, and publish. After your page
        is generated, you can check out the new <code>gh-pages</code>
        branch locally. If you’re using GitHub Desktop,
        simply sync your repository and you’ll see the new branch.
      </p>
      <h3>Designer Templates</h3>
      <p>
        We’ve crafted some handsome templates for you to use. Go ahead and
        click 'Continue to layouts' to browse through them. You can easily go
        back to edit your page before publishing. After publishing your page,
        you can revisit the page generator and switch to another theme. Your
        Page content will be preserved.
      </p>
      <h3>Creating pages manually</h3>
      <p>
        If you prefer to not use the automatic generator, push a branch named
        <code>gh-pages</code> to your repository to create a page manually.
        In addition to supporting regular HTML content, GitHub Pages support
        Jekyll, a simple, blog aware static site generator. Jekyll makes it
        easy to create site-wide headers and footers without having to copy
        them across every page. It also offers intelligent blog support and
        other advanced templating features.
      </p>
      <h3>Authors and Contributors</h3>
      <p>
        You can <a href="https://github.com/blog/821">@mention</a> a
        GitHub username to generate a link to their profile. The resulting
        <code>&lt;a&gt;</code> element will link to the contributor’s GitHub
        Profile. For example:
        In 2007, Chris Wanstrath
        (<a href="https://github.com/defunkt">@defunkt</a>),
        PJ Hyett (<a href="https://github.com/pjhyett">@pjhyett</a>),
        and Tom Preston-Werner (<a href="https://github.com/mojombo">@mojombo</a>)
        founded GitHub.
      </p>
      <h3>Support or Contact</h3>
      <p>
        Having trouble with Pages? Check out our
        <a href="https://help.github.com/pages">documentation</a>
        or
        <a href="https://github.com/contact">contact support</a>
        and we’ll help you sort it out.
      </p>
    </div>
  );
};

export default HomeLayout;
