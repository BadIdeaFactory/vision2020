# Tech & Check Alerts Contribution Guidelines

This document contains information of use to developers looking to improve the Vision 2020: Seat at the Table interactive exhibit codebase. See [README.md](README.md) for an introduction to this project.

## Submitting and Reviewing Code

This repository has a home on [GitHub](https://github.com/badideafactory/vision2020). Please submit [pull requests](https://help.github.com/articles/about-pull-requests/) (PRs) there.

Please submit changes via pull request, even if you have direct commit access to the repository. The PR process allows us to get additional eyes on change proposals.

As you work on your branch, try to test it locally to ensure that it still builds and deploys properly, and that you haven't introduced new accessibility bugs.

Generally, the more controversial, complex or large a change, the moreopportunity people should have to comment on it. That means it should garner more comments/approvals, or it means it should sit longer before being merged. You can talk with us about a change you'd like to make before or while you work on it. We don't have hard rules about such things, and documentation changes usually don't need to sit as long as functional changes, but figure a business day or two for an average patch to get discussed.

As to when to merge, that's a judgment call. Usually once an "approved" review goes through, and there aren't any more changes requested, then the author of the PR will merge it (if they have access to push to master). Generally, wait to merge until the conversation around a change has concluded. If you're unsure, ask! "Is this ready to merge?" is often a useful next step in the conversation.

We do not have automated tests on this repository, but if you would like to help introduce this system, please let us know.

### Configurations

We're using `dotenv` for general runtime configuration settings. Never hard code values that should be configurable, but instead edit the `.env.example` file.

Commits that introduce a new configurable variable should also document the configuration steps in the commit message.

### Linting and Code Style

We're using Prettier to make sure that code is consistent. Code quality fixes should be performed automatically as you commit, so you don't need to think too hard about the rules.

### The "Obvious Fix" rule: committing some minor changes directly to 'master'

Certain kinds of presumed-safe changes may be reviewed post-commit instead of pre-commit, meaning that they can be committed directly to `master` without going through a PR, when the committer has push access to do so.

The purpose of this is to save time for busy developers. It avoids the low-but-still-noticeable overhead of the PR review process for changes where the that process would not provide much additional protection beyond what post-commit review provides anyway. In practice, that means the following kinds of changes:

- Clear typo fixes.

  If there's an obvious typo that doesn't affect code flow (e.g., a typo in a code comment, or even in a user-visible string), you can just fix it. However, if the typo affects code behavior, other than in how user-visible text is displayed, then it should go through the normal PR review process.

- Whitespace and formatting cleanups.

  Commits that are formatting-only and make the code more compliant with our coding guidelines can just be committed directly. There is no need to take a reviewer's time with them.

- Developer documentation changes.

  If the substance of a development documentation change is agreed on, and it's just a matter of wording, then the change can just be committed directly, since after all, it's easy to improve it later. (For example, the commit that added this section to this document would qualify.)

  Substantive changes to user-facing documentation should, of course, still go through the normal PR process.

Developers should always exercise judgment, of course. It's always okay to still use a PR for a change qualifies as an "obvious fix", and if one thinks there is any chance of controversy or disagreement about the change, then the best thing to do is put it into a PR so it can go through the regular review process.

### Branching and Branch Names

We do all development on lightweight branches, with each branch encapsulating one logical changeset (that is, one group of related commits). Please try to keep changesets small and well-bounded: a branch should usually be short-lived, and should be turned into a PR, reviewed, and merged to `master` as soon as possible. Keeping branches short-lived reduces the likelihood of conflicts when it comes time to merge them back into master.

When a branch is associated with an issue ticket, then the branch name should start with the issue number and then give a very brief summary, with hyphens as the separator, e.g.:

    871-fix-provider-risk-score

Everything after the issue number is just a reminder what the branch addresses. Sometimes a branch may address only part of an issue, and that's fine: different branches can start with the same issue number, as long as the summary following the issue number indicates what part of the issue that particular branch addresses.

If there is no issue number associated with a branch, then don't start the branch name with a number.

While there are no strict rules on how to summarize a branch's purpose in its name, it may help to keep in mind some common starting words: "`fix`", "`feature`", "`refactor`", "`remove`", "`improve`", and "`test`".

### Rebases and force-pushes

Force pushes (after a rebase or a `commit --amend`) are currently allowed everywhere except the master branch. This repository has master as a "protected" branch, meaning force-pushes are disabled automatically. If you're working with someone else on a shared branch you should talk with them before changing shared history. We expect force-pushing to mostly occur in active PR branches.

### Commit Messages

#### Follow Best Practices

Please adhere to [the Conventional Commits specification](https://www.conventionalcommits.org/en/v1.0.0-beta.4/) for each commit message.

Think of the commit message as an introduction to the change. A reviewer will read the commit message right before reading the diff itself, so the commit message's purpose is to put the reader in the right frame of mind to understand the code change.

The reason for the short initial summary line is to support commands, such as `git show-branch`, that list changes by showing just the first line of each one's commit message.

#### Reference Issues

If the commit is related to one or more issues, please include the issue number like so:

```
fix: a bug (closes #4)
```

Including the issue number (with the `#` prefix) allows the GitHub UI to [automatically link the commit to the issue](https://help.github.com/articles/autolinked-references-and-urls/#issues-and-pull-requests), and including the word "close" or "resolve" allows the commit to automatically close the issue if necessary.

### Licensing Your Contribution

As a BIFFUD Project, this is published as open source software using the GNU General Public license. It is important that the codebase continue to be publishable under that license. Please see the [Contributor License Agreement](https://github.com/BadIdeaFactory/corporate/blob/master/documents/contributor-license-agreement.md) for more information about how your contribution will be licensed.

### Expunge Branches Once They Are Merged

Once a branch has been merged to `master`, GitHub will automatically delete that branch.

## Avoiding Generatable Elements In The Repo

As a general rule, we try to keep generated elements out of the repository. This includes files that result from build processes. If we want to memorialize a compiled version of the program, the best way to do that is with tags or to record that information and put the saved version somewhere other than this repository. If a file can be generated from the materials in the repository using commonly-available tools, please do not put it in the repository without raising it for discussion.

## Thank you!

The Corporate Overlords of Bad Idea Factory appreciate your dedication and service to the public good.

## Attribution

This Contributing document is adapted from the work of [Open Tech Strategies](https://opentechstrategies.com)
