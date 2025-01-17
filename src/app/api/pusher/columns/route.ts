import { pusherServer } from '@/utils/pusher';

export async function POST(req: Request) {
  const { member, column, action, roomId, socketId } = await req.json();

  if (action === 'create') {
    await pusherServer.trigger(
      String(roomId),
      'columns',
      `${member} 님이 ${column} 컬럼을 생성하였습니다.`,
      {
        socket_id: socketId,
      },
    );
  }

  if (action === 'edit') {
    await pusherServer.trigger(
      String(roomId),
      'columns',
      `${member} 님이 ${column} 컬럼을 수정하였습니다.`,
      {
        socket_id: socketId,
      },
    );
  }

  if (action === 'delete') {
    await pusherServer.trigger(
      String(roomId),
      'columns',
      `${member} 님이 ${column} 컬럼을 삭제하였습니다.`,
      {
        socket_id: socketId,
      },
    );
  }

  return new Response(JSON.stringify({ success: true }));
}
