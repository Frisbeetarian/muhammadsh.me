import React from 'react';
import Image from 'next/image';
import CodeBlock from './CodeBlock';

function Neo4JService(props) {
  return (
    <>
      <li className="mb-4">
        <h4 className="w-full mb-2 text-lg md:text-xl">
          <a
            className="underline flex items-center transform hover:scale-[1.01] hover:ml-2 transition-all text-th-primary-dark"
            href="https://github.com/Frisbeetarian/noon-rabbit-mq-rpc"
            target="_blank"
            rel="noopener noreferrer"
          >
            The Neo4j Service
            <Image
              className="text-white bg-white rounded ml-3"
              width="16"
              height="16"
              src="/external-link.svg"
              alt="external link icon"
            />
          </a>
        </h4>
      </li>

      <p className="ml-4 mb-4">
        Lets take an example where one user is attempting to add another user as
        a friend. After searching for that specific user and getting the ES
        results, a friend request is sent:
        <CodeBlock
          code={`await sendFriendRequest({
                variables: {
                  profileUuid: profile.uuid,
                },
              })`}
        ></CodeBlock>
        where `profileUuid` is the uuid of the profile who is going to receive
        the friend request. The resolver receives the request and calls the
        graph API with sender and receiver details. The method then initiates
        the following Cypher query:
        <CodeBlock
          code={`tx.run(
                MATCH (p1:Profile {uuid: $sUuid}) 
                MATCH (p2:Profile {uuid: $rUuid}) 
                MERGE (p1)-[friendRequest:FRIEND_REQUEST 
                {uuid: $recipientProfileUuid, username: $recipientProfileUsername }]->(p2) 
                RETURN p1, friendRequest, p2,
                {
                  sUuid: senderProfileUuid,
                  rUuid: recipientProfileUuid,
                  recipientProfileUuid,
                  recipientProfileUsername,
                }
              )`}
        ></CodeBlock>
        A FRIEND_REQUEST relationship is created, going from profile1 to
        profile2, between the two profiles and the details of the receiving
        profile added to the relationship in order to easily identify who that
        relationship is targeting. The receiving profile then receives the
        request and can either deny or accept the friend request. If accepted,
        an acceptFriendRequest request is sent:
        <CodeBlock
          code={`await acceptFriendRequest({
                variables: {
                  profileUuid: from,
                },
              })`}
        />
        Where `from` is the uuid of the profile who originally sent the friend
        request. We get that uuid from the Socketio payload. The resolver
        receives the request and then calls the graph api to create that
        relationship:
        <CodeBlock
          code={`
              tx.run(
                Match (p1:Profile {uuid: $sUuid})  
                Match (p2:Profile {uuid: $rUuid}) 
                Merge (p1)-[friends:FRIENDS 
                {uuid: $recipientProfileUuid, username: $recipientProfileUsername }]->(p2) 
                Merge (p2)-[:FRIENDS {uuid: $senderProfileUuid, username: $senderProfileUsername }]->(p1) 
                WITH p1, friends, p2 
                Match (p1)-[fr:FRIEND_REQUEST]->(p2) 
                DELETE fr 
                RETURN p1, friends, p2,
                {
                  sUuid: senderProfileUuid,
                  rUuid: recipientProfileUuid,
                  recipientProfileUuid,
                  recipientProfileUsername,
                  senderProfileUsername,
                  senderProfileUuid,
                }
              )
              `}
        />
        The cypher query creates a bi-directional relationship of FRIENDS
        between the two profiles and then deletes the existing FRIEND_REQUEST
        relationship that they have between them. The method responsible for
        calling the graph method then receives a response, creates a
        conversation object and responds with the conversation object. The user
        accepting the friend request then receives the response, updates the
        store and emits an event to the user who requested the friendship that
        the request has been accepted. The user who initiated the friendship
        then receives the socket event and also updates the store with the
        conversation. A new conversation is created for both users and they are
        now able to converse.
      </p>

      <CodeBlock
        code={`MATCH (p:Profile) 
              OPTIONAL MATCH (p)-[friends:FRIENDS]->(o)
              OPTIONAL MATCH (p)-[friendRequest:FRIEND_REQUEST]->(i)
              OPTIONAL MATCH (p)<-[friendRequestReverse:FRIEND_REQUEST]-(m)
              return friends, p, friendRequest, i, friendRequestReverse, m`}
      ></CodeBlock>
    </>
  );
}

export default Neo4JService;
