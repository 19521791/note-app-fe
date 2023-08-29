import { graphQLRequest } from "./request";

export const notesLoader = async ({ params: { folderId } }) => {
    console.log('Params', { folderId });
    const query = `query Folder($folderId: String!) {
        folder(folderId: $folderId) {
          id
          name
          notes {
              id
              content
          }
        }
      }`;

    const data = await graphQLRequest({
        query,
        variables: {
            folderId
        }
    })
    console.log('From Router', {data});
    return data;
}

export const noteLoader = async ({ params: { noteId } }) => {
    console.log('Params', { noteId });
    const query = `query Folder($noteId: String!) {
        note(noteId: $noteId) {
         id
         content
        }
      }`;

      const data = await graphQLRequest({
        query,
        variables: {
            noteId
        }
    })
    console.log('From Router', {data});
    return data;
}