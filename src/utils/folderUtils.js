import { graphQLRequest } from "./request";

export const foldersLoader = async () => {
    const query = `query Folders {
        folders {
          id
          name
          createdAt
        }
      }`;

      const data = await graphQLRequest({query});
      return data;
};

export const addNewFolder = async (newFolder) => {
  const query = `mutation Mutation($name: String!) {
    addFolder(name: $name){
      name 
      author {
        name
      }
    }
  }`;

  const data = await graphQLRequest({
    query, 
    variables: { name: newFolder.name },
  });

  return data;
};

export const updateFolder = async (folderId, newName) => {
  const query = `mutation Mutation($folderId: ID!, $name: String!) {
    updateFolder(folderId: $folderId, name: $name) {
      id
      name
    }
  }`;

  const data = await graphQLRequest({
    query,
    variables: {
      folderId,
      name: newName.name
    },
  });

  return data
}
