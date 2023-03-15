export interface iProfile {
  title: 'Public User';
  description: 'Public User';

  login: {
    type: 'string';
  };
  id: {
    type: 'integer';
  };
  node_id: {
    type: 'string';
  };
  avatar_url: {
    type: 'string';
    format: 'uri';
  };
  gravatar_id: {
    type: ['string', 'null'];
  };
  url: {
    type: 'string';
    format: 'uri';
  };
  html_url: {
    type: 'string';
    format: 'uri';
  };
  followers_url: {
    type: 'string';
    format: 'uri';
  };
  following_url: {
    type: 'string';
  };
  gists_url: {
    type: 'string';
  };
  starred_url: {
    type: 'string';
  };
  subscriptions_url: {
    type: 'string';
    format: 'uri';
  };
  organizations_url: {
    type: 'string';
    format: 'uri';
  };
  repos_url: {
    type: 'string';
    format: 'uri';
  };
  events_url: {
    type: 'string';
  };
  received_events_url: {
    type: 'string';
    format: 'uri';
  };
  type: {
    type: 'string';
  };
  site_admin: {
    type: 'boolean';
  };
  name: {
    type: ['string', 'null'];
  };
  company: {
    type: ['string', 'null'];
  };
  blog: {
    type: ['string', 'null'];
  };
  location: {
    type: ['string', 'null'];
  };
  email: {
    type: ['string', 'null'];
    format: 'email';
  };
  hireable: {
    type: ['boolean', 'null'];
  };
  bio: {
    type: ['string', 'null'];
  };
  twitter_username: {
    type: ['string', 'null'];
  };
  public_repos: {
    type: 'integer';
  };
  public_gists: {
    type: 'integer';
  };
  followers: {
    type: 'integer';
  };
  following: {
    type: 'integer';
  };
  created_at: {
    type: 'string';
    format: 'date-time';
  };
  updated_at: {
    type: 'string';
    format: 'date-time';
  };
  plan: {
    type: 'object';
    properties: {
      collaborators: {
        type: 'integer';
      };
      name: {
        type: 'string';
      };
      space: {
        type: 'integer';
      };
      private_repos: {
        type: 'integer';
      };
    };
    required: ['collaborators', 'name', 'space', 'private_repos'];
  };
  suspended_at: {
    type: ['string', 'null'];
    format: 'date-time';
  };
  private_gists: {
    type: 'integer';
    examples: [1];
  };
  total_private_repos: {
    type: 'integer';
    examples: [2];
  };
  owned_private_repos: {
    type: 'integer';
    examples: [2];
  };
  disk_usage: {
    type: 'integer';
    examples: [1];
  };
  collaborators: {
    type: 'integer';
    examples: [3];
  };
  required: [
    'avatar_url',
    'events_url',
    'followers_url',
    'following_url',
    'gists_url',
    'gravatar_id',
    'html_url',
    'id',
    'node_id',
    'login',
    'organizations_url',
    'received_events_url',
    'repos_url',
    'site_admin',
    'starred_url',
    'subscriptions_url',
    'type',
    'url',
    'bio',
    'blog',
    'company',
    'email',
    'followers',
    'following',
    'hireable',
    'location',
    'name',
    'public_gists',
    'public_repos',
    'created_at',
    'updated_at'
  ];
  // additionalProperties: false;
}

export interface iRepository {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  owner: {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: any;
    site_admin: boolean;
  };
  private: boolean;
  html_url: string;
  description: string;
  fork: boolean;
  url: string;
  archive_url: string;
  assignees_url: string;
  blobs_url: string;
  branches_url: string;
  collaborators_url: string;
  comments_url: string;
  commits_url: string;
  compare_url: string;
  contents_url: string;
  contributors_url: string;
  deployments_url: string;
  downloads_url: string;
  events_url: string;
  forks_url: string;
  git_commits_url: string;
  git_refs_url: string;
  git_tags_url: string;
  git_url: string;
  issue_comment_url: string;
  issue_events_url: string;
  issues_url: string;
  keys_url: string;
  labels_url: string;
  languages_url: string;
  merges_url: string;
  milestones_url: string;
  notifications_url: string;
  pulls_url: string;
  releases_url: string;
  ssh_url: string;
  stargazers_url: string;
  statuses_url: string;
  subscribers_url: string;
  subscription_url: string;
  tags_url: string;
  teams_url: string;
  trees_url: string;
  hooks_url: string;
}
